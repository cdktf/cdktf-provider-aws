# `networkAclRule` Submodule <a name="`networkAclRule` Submodule" id="@cdktf/provider-aws.networkAclRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkAclRule <a name="NetworkAclRule" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule aws_network_acl_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkAclRule(Construct Scope, string Id, NetworkAclRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig">NetworkAclRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig">NetworkAclRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetToPort"></a>

```csharp
private void ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkAclRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkAclRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkAclRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egressInput">EgressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput">NetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput">RuleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egress">Egress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId">NetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction">RuleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egressInput"></a>

```csharp
public object EgressInput { get; }
```

- *Type:* object

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `NetworkAclIdInput`<sup>Optional</sup> <a name="NetworkAclIdInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput"></a>

```csharp
public string NetworkAclIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput"></a>

```csharp
public string RuleActionInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egress"></a>

```csharp
public object Egress { get; }
```

- *Type:* object

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `NetworkAclId`<sup>Required</sup> <a name="NetworkAclId" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId"></a>

```csharp
public string NetworkAclId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction"></a>

```csharp
public string RuleAction { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkAclRuleConfig <a name="NetworkAclRuleConfig" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkAclRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkAclId,
    string Protocol,
    string RuleAction,
    double RuleNumber,
    string CidrBlock = null,
    object Egress = null,
    double FromPort = null,
    double IcmpCode = null,
    double IcmpType = null,
    string Id = null,
    string Ipv6CidrBlock = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId">NetworkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#protocol NetworkAclRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction">RuleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_action NetworkAclRule#rule_action}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_number NetworkAclRule#rule_number}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#cidr_block NetworkAclRule#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress">Egress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#egress NetworkAclRule#egress}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#from_port NetworkAclRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_code NetworkAclRule#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_type NetworkAclRule#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#id NetworkAclRule#id}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#to_port NetworkAclRule#to_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkAclId`<sup>Required</sup> <a name="NetworkAclId" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId"></a>

```csharp
public string NetworkAclId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#protocol NetworkAclRule#protocol}.

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction"></a>

```csharp
public string RuleAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_action NetworkAclRule#rule_action}.

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_number NetworkAclRule#rule_number}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#cidr_block NetworkAclRule#cidr_block}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress"></a>

```csharp
public object Egress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#egress NetworkAclRule#egress}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#from_port NetworkAclRule#from_port}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_code NetworkAclRule#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_type NetworkAclRule#icmp_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#id NetworkAclRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#to_port NetworkAclRule#to_port}.

---



