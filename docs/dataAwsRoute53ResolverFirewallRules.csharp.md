# `dataAwsRoute53ResolverFirewallRules` Submodule <a name="`dataAwsRoute53ResolverFirewallRules` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallRules <a name="DataAwsRoute53ResolverFirewallRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules aws_route53_resolver_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ResolverFirewallRules(Construct Scope, string Id, DataAwsRoute53ResolverFirewallRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig">DataAwsRoute53ResolverFirewallRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig">DataAwsRoute53ResolverFirewallRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetPriority"></a>

```csharp
private void ResetPriority()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ResolverFirewallRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ResolverFirewallRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ResolverFirewallRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRules">FirewallRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList">DataAwsRoute53ResolverFirewallRulesFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupIdInput">FirewallRuleGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priority">Priority</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FirewallRules`<sup>Required</sup> <a name="FirewallRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRules"></a>

```csharp
public DataAwsRoute53ResolverFirewallRulesFirewallRulesList FirewallRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList">DataAwsRoute53ResolverFirewallRulesFirewallRulesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupIdInput`<sup>Optional</sup> <a name="FirewallRuleGroupIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupIdInput"></a>

```csharp
public string FirewallRuleGroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallRulesConfig <a name="DataAwsRoute53ResolverFirewallRulesConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ResolverFirewallRulesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FirewallRuleGroupId,
    string Action = null,
    string Id = null,
    double Priority = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}.

---

### DataAwsRoute53ResolverFirewallRulesFirewallRules <a name="DataAwsRoute53ResolverFirewallRulesFirewallRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ResolverFirewallRulesFirewallRules {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverFirewallRulesFirewallRulesList <a name="DataAwsRoute53ResolverFirewallRulesFirewallRulesList" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ResolverFirewallRulesFirewallRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get"></a>

```csharp
private DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference <a name="DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockResponse">BlockResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creatorRequestId">CreatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.modificationTime">ModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules">DataAwsRoute53ResolverFirewallRulesFirewallRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `BlockOverrideDnsType`<sup>Required</sup> <a name="BlockOverrideDnsType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```csharp
public string BlockOverrideDnsType { get; }
```

- *Type:* string

---

##### `BlockOverrideDomain`<sup>Required</sup> <a name="BlockOverrideDomain" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```csharp
public string BlockOverrideDomain { get; }
```

- *Type:* string

---

##### `BlockOverrideTtl`<sup>Required</sup> <a name="BlockOverrideTtl" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```csharp
public double BlockOverrideTtl { get; }
```

- *Type:* double

---

##### `BlockResponse`<sup>Required</sup> <a name="BlockResponse" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockResponse"></a>

```csharp
public string BlockResponse { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creatorRequestId"></a>

```csharp
public string CreatorRequestId { get; }
```

- *Type:* string

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainListId"></a>

```csharp
public string FirewallDomainListId { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.modificationTime"></a>

```csharp
public string ModificationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsRoute53ResolverFirewallRulesFirewallRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules">DataAwsRoute53ResolverFirewallRulesFirewallRules</a>

---



