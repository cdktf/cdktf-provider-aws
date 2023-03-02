# `securityGroupRule` Submodule <a name="`securityGroupRule` Submodule" id="@cdktf/provider-aws.securityGroupRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroupRule <a name="SecurityGroupRule" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule aws_security_group_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityGroupRule(Construct Scope, string Id, SecurityGroupRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig">SecurityGroupRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig">SecurityGroupRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetIpv6CidrBlocks">ResetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSourceSecurityGroupId">ResetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityGroupRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a>

---

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetCidrBlocks"></a>

```csharp
private void ResetCidrBlocks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6CidrBlocks` <a name="ResetIpv6CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetIpv6CidrBlocks"></a>

```csharp
private void ResetIpv6CidrBlocks()
```

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetPrefixListIds"></a>

```csharp
private void ResetPrefixListIds()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSelfAttribute"></a>

```csharp
private void ResetSelfAttribute()
```

##### `ResetSourceSecurityGroupId` <a name="ResetSourceSecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetSourceSecurityGroupId"></a>

```csharp
private void ResetSourceSecurityGroupId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityGroupRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityGroupRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityGroupRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupRuleId">SecurityGroupRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference">SecurityGroupRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocksInput">Ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupIdInput">SourceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttribute">SelfAttribute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SecurityGroupRuleId`<sup>Required</sup> <a name="SecurityGroupRuleId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupRuleId"></a>

```csharp
public string SecurityGroupRuleId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeouts"></a>

```csharp
public SecurityGroupRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference">SecurityGroupRuleTimeoutsOutputReference</a>

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocksInput"></a>

```csharp
public string[] CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlocksInput`<sup>Optional</sup> <a name="Ipv6CidrBlocksInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocksInput"></a>

```csharp
public string[] Ipv6CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIdsInput"></a>

```csharp
public string[] PrefixListIdsInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttributeInput"></a>

```csharp
public object SelfAttributeInput { get; }
```

- *Type:* object

---

##### `SourceSecurityGroupIdInput`<sup>Optional</sup> <a name="SourceSecurityGroupIdInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupIdInput"></a>

```csharp
public string SourceSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocks"></a>

```csharp
public string[] Ipv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.selfAttribute"></a>

```csharp
public object SelfAttribute { get; }
```

- *Type:* object

---

##### `SourceSecurityGroupId`<sup>Required</sup> <a name="SourceSecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupId"></a>

```csharp
public string SourceSecurityGroupId { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupRuleConfig <a name="SecurityGroupRuleConfig" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityGroupRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double FromPort,
    string Protocol,
    string SecurityGroupId,
    double ToPort,
    string Type,
    string[] CidrBlocks = null,
    string Description = null,
    string Id = null,
    string[] Ipv6CidrBlocks = null,
    string[] PrefixListIds = null,
    object SelfAttribute = null,
    string SourceSecurityGroupId = null,
    SecurityGroupRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#from_port SecurityGroupRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#protocol SecurityGroupRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#security_group_id SecurityGroupRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#to_port SecurityGroupRule#to_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#type SecurityGroupRule#type}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#cidr_blocks SecurityGroupRule#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#description SecurityGroupRule#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#id SecurityGroupRule#id}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#prefix_list_ids SecurityGroupRule#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.selfAttribute">SelfAttribute</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#self SecurityGroupRule#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#from_port SecurityGroupRule#from_port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#protocol SecurityGroupRule#protocol}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#security_group_id SecurityGroupRule#security_group_id}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#to_port SecurityGroupRule#to_port}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#type SecurityGroupRule#type}.

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#cidr_blocks SecurityGroupRule#cidr_blocks}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#description SecurityGroupRule#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#id SecurityGroupRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlocks`<sup>Optional</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.ipv6CidrBlocks"></a>

```csharp
public string[] Ipv6CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}.

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#prefix_list_ids SecurityGroupRule#prefix_list_ids}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.selfAttribute"></a>

```csharp
public object SelfAttribute { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#self SecurityGroupRule#self}.

---

##### `SourceSecurityGroupId`<sup>Optional</sup> <a name="SourceSecurityGroupId" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.sourceSecurityGroupId"></a>

```csharp
public string SourceSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleConfig.property.timeouts"></a>

```csharp
public SecurityGroupRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts">SecurityGroupRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#timeouts SecurityGroupRule#timeouts}

---

### SecurityGroupRuleTimeouts <a name="SecurityGroupRuleTimeouts" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityGroupRuleTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#create SecurityGroupRule#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule#create SecurityGroupRule#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityGroupRuleTimeoutsOutputReference <a name="SecurityGroupRuleTimeoutsOutputReference" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityGroupRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityGroupRule.SecurityGroupRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



