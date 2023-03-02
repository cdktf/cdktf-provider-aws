# `configConfigRule` Submodule <a name="`configConfigRule` Submodule" id="@cdktf/provider-aws.configConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigRule <a name="ConfigConfigRule" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule aws_config_config_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRule(Construct Scope, string Id, ConfigConfigRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope"></a>

```csharp
private void PutScope(ConfigConfigRuleScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource"></a>

```csharp
private void PutSource(ConfigConfigRuleSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters"></a>

```csharp
private void ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConfigRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConfigRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConfigRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput">InputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scope"></a>

```csharp
public ConfigConfigRuleScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.source"></a>

```csharp
public ConfigConfigRuleSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput"></a>

```csharp
public string InputParametersInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput"></a>

```csharp
public ConfigConfigRuleScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput"></a>

```csharp
public ConfigConfigRuleSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigRuleConfig <a name="ConfigConfigRuleConfig" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ConfigConfigRuleSource Source,
    string Description = null,
    string Id = null,
    string InputParameters = null,
    string MaximumExecutionFrequency = null,
    ConfigConfigRuleScope Scope = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters">InputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source"></a>

```csharp
public ConfigConfigRuleSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source ConfigConfigRule#source}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters"></a>

```csharp
public string InputParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope"></a>

```csharp
public ConfigConfigRuleScope Scope { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#scope ConfigConfigRule#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}.

---

### ConfigConfigRuleScope <a name="ConfigConfigRuleScope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleScope {
    string ComplianceResourceId = null,
    string[] ComplianceResourceTypes = null,
    string TagKey = null,
    string TagValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId">ComplianceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_key ConfigConfigRule#tag_key}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue">TagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_value ConfigConfigRule#tag_value}. |

---

##### `ComplianceResourceId`<sup>Optional</sup> <a name="ComplianceResourceId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId"></a>

```csharp
public string ComplianceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}.

---

##### `ComplianceResourceTypes`<sup>Optional</sup> <a name="ComplianceResourceTypes" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes"></a>

```csharp
public string[] ComplianceResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_key ConfigConfigRule#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_value ConfigConfigRule#tag_value}.

---

### ConfigConfigRuleSource <a name="ConfigConfigRuleSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleSource {
    string Owner,
    ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetails = null,
    object SourceDetail = null,
    string SourceIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#owner ConfigConfigRule#owner}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | custom_policy_details block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail">SourceDetail</a></code> | <code>object</code> | source_detail block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_identifier ConfigConfigRule#source_identifier}. |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#owner ConfigConfigRule#owner}.

---

##### `CustomPolicyDetails`<sup>Optional</sup> <a name="CustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

custom_policy_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

##### `SourceDetail`<sup>Optional</sup> <a name="SourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail"></a>

```csharp
public object SourceDetail { get; set; }
```

- *Type:* object

source_detail block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_detail ConfigConfigRule#source_detail}

---

##### `SourceIdentifier`<sup>Optional</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_identifier ConfigConfigRule#source_identifier}.

---

### ConfigConfigRuleSourceCustomPolicyDetails <a name="ConfigConfigRuleSourceCustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleSourceCustomPolicyDetails {
    string PolicyRuntime,
    string PolicyText,
    object EnableDebugLogDelivery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText">PolicyText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_text ConfigConfigRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}. |

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}.

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText"></a>

```csharp
public string PolicyText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_text ConfigConfigRule#policy_text}.

---

##### `EnableDebugLogDelivery`<sup>Optional</sup> <a name="EnableDebugLogDelivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery"></a>

```csharp
public object EnableDebugLogDelivery { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}.

---

### ConfigConfigRuleSourceSourceDetail <a name="ConfigConfigRuleSourceSourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleSourceSourceDetail {
    string EventSource = null,
    string MaximumExecutionFrequency = null,
    string MessageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource">EventSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#event_source ConfigConfigRule#event_source}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType">MessageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#message_type ConfigConfigRule#message_type}. |

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource"></a>

```csharp
public string EventSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#event_source ConfigConfigRule#event_source}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `MessageType`<sup>Optional</sup> <a name="MessageType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType"></a>

```csharp
public string MessageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#message_type ConfigConfigRule#message_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigRuleScopeOutputReference <a name="ConfigConfigRuleScopeOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId">ResetComplianceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes">ResetComplianceResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceResourceId` <a name="ResetComplianceResourceId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId"></a>

```csharp
private void ResetComplianceResourceId()
```

##### `ResetComplianceResourceTypes` <a name="ResetComplianceResourceTypes" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes"></a>

```csharp
private void ResetComplianceResourceTypes()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue"></a>

```csharp
private void ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput">ComplianceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput">ComplianceResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId">ComplianceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceResourceIdInput`<sup>Optional</sup> <a name="ComplianceResourceIdInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput"></a>

```csharp
public string ComplianceResourceIdInput { get; }
```

- *Type:* string

---

##### `ComplianceResourceTypesInput`<sup>Optional</sup> <a name="ComplianceResourceTypesInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput"></a>

```csharp
public string[] ComplianceResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `ComplianceResourceId`<sup>Required</sup> <a name="ComplianceResourceId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId"></a>

```csharp
public string ComplianceResourceId { get; }
```

- *Type:* string

---

##### `ComplianceResourceTypes`<sup>Required</sup> <a name="ComplianceResourceTypes" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes"></a>

```csharp
public string[] ComplianceResourceTypes { get; }
```

- *Type:* string[]

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigRuleScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---


### ConfigConfigRuleSourceCustomPolicyDetailsOutputReference <a name="ConfigConfigRuleSourceCustomPolicyDetailsOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleSourceCustomPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery">ResetEnableDebugLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDebugLogDelivery` <a name="ResetEnableDebugLogDelivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery"></a>

```csharp
private void ResetEnableDebugLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput">EnableDebugLogDeliveryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput">PolicyRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput">PolicyTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText">PolicyText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableDebugLogDeliveryInput`<sup>Optional</sup> <a name="EnableDebugLogDeliveryInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput"></a>

```csharp
public object EnableDebugLogDeliveryInput { get; }
```

- *Type:* object

---

##### `PolicyRuntimeInput`<sup>Optional</sup> <a name="PolicyRuntimeInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput"></a>

```csharp
public string PolicyRuntimeInput { get; }
```

- *Type:* string

---

##### `PolicyTextInput`<sup>Optional</sup> <a name="PolicyTextInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput"></a>

```csharp
public string PolicyTextInput { get; }
```

- *Type:* string

---

##### `EnableDebugLogDelivery`<sup>Required</sup> <a name="EnableDebugLogDelivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery"></a>

```csharp
public object EnableDebugLogDelivery { get; }
```

- *Type:* object

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; }
```

- *Type:* string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText"></a>

```csharp
public string PolicyText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---


### ConfigConfigRuleSourceOutputReference <a name="ConfigConfigRuleSourceOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails">PutCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail">PutSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails">ResetCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail">ResetSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier">ResetSourceIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicyDetails` <a name="PutCustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails"></a>

```csharp
private void PutCustomPolicyDetails(ConfigConfigRuleSourceCustomPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `PutSourceDetail` <a name="PutSourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail"></a>

```csharp
private void PutSourceDetail(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomPolicyDetails` <a name="ResetCustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails"></a>

```csharp
private void ResetCustomPolicyDetails()
```

##### `ResetSourceDetail` <a name="ResetSourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail"></a>

```csharp
private void ResetSourceDetail()
```

##### `ResetSourceIdentifier` <a name="ResetSourceIdentifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier"></a>

```csharp
private void ResetSourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail">SourceDetail</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput">CustomPolicyDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput">SourceDetailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPolicyDetails`<sup>Required</sup> <a name="CustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetailsOutputReference CustomPolicyDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a>

---

##### `SourceDetail`<sup>Required</sup> <a name="SourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail"></a>

```csharp
public ConfigConfigRuleSourceSourceDetailList SourceDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a>

---

##### `CustomPolicyDetailsInput`<sup>Optional</sup> <a name="CustomPolicyDetailsInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `SourceDetailInput`<sup>Optional</sup> <a name="SourceDetailInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput"></a>

```csharp
public object SourceDetailInput { get; }
```

- *Type:* object

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput"></a>

```csharp
public string SourceIdentifierInput { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigRuleSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---


### ConfigConfigRuleSourceSourceDetailList <a name="ConfigConfigRuleSourceSourceDetailList" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleSourceSourceDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get"></a>

```csharp
private ConfigConfigRuleSourceSourceDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigConfigRuleSourceSourceDetailOutputReference <a name="ConfigConfigRuleSourceSourceDetailOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigRuleSourceSourceDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType">ResetMessageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource"></a>

```csharp
private void ResetEventSource()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetMessageType` <a name="ResetMessageType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType"></a>

```csharp
private void ResetMessageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput">MessageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource">EventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType">MessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput"></a>

```csharp
public string EventSourceInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput"></a>

```csharp
public string MessageTypeInput { get; }
```

- *Type:* string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource"></a>

```csharp
public string EventSource { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType"></a>

```csharp
public string MessageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



