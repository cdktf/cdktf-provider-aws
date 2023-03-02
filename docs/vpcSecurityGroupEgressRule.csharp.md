# `vpcSecurityGroupEgressRule` Submodule <a name="`vpcSecurityGroupEgressRule` Submodule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupEgressRule <a name="VpcSecurityGroupEgressRule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule aws_vpc_security_group_egress_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcSecurityGroupEgressRule(Construct Scope, string Id, VpcSecurityGroupEgressRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4">ResetCidrIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId">ResetPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId">ResetReferencedSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCidrIpv4` <a name="ResetCidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4"></a>

```csharp
private void ResetCidrIpv4()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6"></a>

```csharp
private void ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetPrefixListId` <a name="ResetPrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId"></a>

```csharp
private void ResetPrefixListId()
```

##### `ResetReferencedSecurityGroupId` <a name="ResetReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId"></a>

```csharp
private void ResetReferencedSecurityGroupId()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort"></a>

```csharp
private void ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcSecurityGroupEgressRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcSecurityGroupEgressRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcSecurityGroupEgressRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId">SecurityGroupRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input">CidrIpv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput">PrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput">ReferencedSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4">CidrIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId">PrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId">ReferencedSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityGroupRuleId`<sup>Required</sup> <a name="SecurityGroupRuleId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId"></a>

```csharp
public string SecurityGroupRuleId { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CidrIpv4Input`<sup>Optional</sup> <a name="CidrIpv4Input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input"></a>

```csharp
public string CidrIpv4Input { get; }
```

- *Type:* string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input"></a>

```csharp
public string CidrIpv6Input { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `PrefixListIdInput`<sup>Optional</sup> <a name="PrefixListIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput"></a>

```csharp
public string PrefixListIdInput { get; }
```

- *Type:* string

---

##### `ReferencedSecurityGroupIdInput`<sup>Optional</sup> <a name="ReferencedSecurityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput"></a>

```csharp
public string ReferencedSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrIpv4`<sup>Required</sup> <a name="CidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4"></a>

```csharp
public string CidrIpv4 { get; }
```

- *Type:* string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId"></a>

```csharp
public string PrefixListId { get; }
```

- *Type:* string

---

##### `ReferencedSecurityGroupId`<sup>Required</sup> <a name="ReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId"></a>

```csharp
public string ReferencedSecurityGroupId { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupEgressRuleConfig <a name="VpcSecurityGroupEgressRuleConfig" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcSecurityGroupEgressRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpProtocol,
    string CidrIpv4 = null,
    string CidrIpv6 = null,
    string Description = null,
    double FromPort = null,
    string PrefixListId = null,
    string ReferencedSecurityGroupId = null,
    string SecurityGroupId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4">CidrIpv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId">PrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId">ReferencedSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}.

---

##### `CidrIpv4`<sup>Optional</sup> <a name="CidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4"></a>

```csharp
public string CidrIpv4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}.

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}.

---

##### `PrefixListId`<sup>Optional</sup> <a name="PrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId"></a>

```csharp
public string PrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}.

---

##### `ReferencedSecurityGroupId`<sup>Optional</sup> <a name="ReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId"></a>

```csharp
public string ReferencedSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}.

---



