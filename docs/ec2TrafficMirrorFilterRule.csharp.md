# `ec2TrafficMirrorFilterRule` Submodule <a name="`ec2TrafficMirrorFilterRule` Submodule" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorFilterRule <a name="Ec2TrafficMirrorFilterRule" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule aws_ec2_traffic_mirror_filter_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorFilterRule(Construct Scope, string Id, Ec2TrafficMirrorFilterRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig">Ec2TrafficMirrorFilterRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig">Ec2TrafficMirrorFilterRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(Ec2TrafficMirrorFilterRuleDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(Ec2TrafficMirrorFilterRuleSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TrafficMirrorFilterRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TrafficMirrorFilterRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TrafficMirrorFilterRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput">RuleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput">SourceCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput">TrafficDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput">TrafficMirrorFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction">RuleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection">TrafficDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId">TrafficMirrorFilterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference">Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlockInput"></a>

```csharp
public string DestinationCidrBlockInput { get; }
```

- *Type:* string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationPortRangeInput"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleActionInput"></a>

```csharp
public string RuleActionInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `SourceCidrBlockInput`<sup>Optional</sup> <a name="SourceCidrBlockInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlockInput"></a>

```csharp
public string SourceCidrBlockInput { get; }
```

- *Type:* string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourcePortRangeInput"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---

##### `TrafficDirectionInput`<sup>Optional</sup> <a name="TrafficDirectionInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirectionInput"></a>

```csharp
public string TrafficDirectionInput { get; }
```

- *Type:* string

---

##### `TrafficMirrorFilterIdInput`<sup>Optional</sup> <a name="TrafficMirrorFilterIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterIdInput"></a>

```csharp
public string TrafficMirrorFilterIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleAction"></a>

```csharp
public string RuleAction { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.sourceCidrBlock"></a>

```csharp
public string SourceCidrBlock { get; }
```

- *Type:* string

---

##### `TrafficDirection`<sup>Required</sup> <a name="TrafficDirection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficDirection"></a>

```csharp
public string TrafficDirection { get; }
```

- *Type:* string

---

##### `TrafficMirrorFilterId`<sup>Required</sup> <a name="TrafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.trafficMirrorFilterId"></a>

```csharp
public string TrafficMirrorFilterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorFilterRuleConfig <a name="Ec2TrafficMirrorFilterRuleConfig" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorFilterRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DestinationCidrBlock,
    string RuleAction,
    double RuleNumber,
    string SourceCidrBlock,
    string TrafficDirection,
    string TrafficMirrorFilterId,
    string Description = null,
    Ec2TrafficMirrorFilterRuleDestinationPortRange DestinationPortRange = null,
    string Id = null,
    double Protocol = null,
    Ec2TrafficMirrorFilterRuleSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction">RuleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection">TrafficDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId">TrafficMirrorFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol">Protocol</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | source_port_range block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}.

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleAction"></a>

```csharp
public string RuleAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_action Ec2TrafficMirrorFilterRule#rule_action}.

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#rule_number Ec2TrafficMirrorFilterRule#rule_number}.

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourceCidrBlock"></a>

```csharp
public string SourceCidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}.

---

##### `TrafficDirection`<sup>Required</sup> <a name="TrafficDirection" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficDirection"></a>

```csharp
public string TrafficDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}.

---

##### `TrafficMirrorFilterId`<sup>Required</sup> <a name="TrafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.trafficMirrorFilterId"></a>

```csharp
public string TrafficMirrorFilterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#description Ec2TrafficMirrorFilterRule#description}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.destinationPortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#id Ec2TrafficMirrorFilterRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#protocol Ec2TrafficMirrorFilterRule#protocol}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleConfig.property.sourcePortRange"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}

---

### Ec2TrafficMirrorFilterRuleDestinationPortRange <a name="Ec2TrafficMirrorFilterRuleDestinationPortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorFilterRuleDestinationPortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

### Ec2TrafficMirrorFilterRuleSourcePortRange <a name="Ec2TrafficMirrorFilterRuleSourcePortRange" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorFilterRuleSourcePortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#from_port Ec2TrafficMirrorFilterRule#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule#to_port Ec2TrafficMirrorFilterRule#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2TrafficMirrorFilterRuleDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleDestinationPortRange">Ec2TrafficMirrorFilterRuleDestinationPortRange</a>

---


### Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference <a name="Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2TrafficMirrorFilterRuleSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorFilterRule.Ec2TrafficMirrorFilterRuleSourcePortRange">Ec2TrafficMirrorFilterRuleSourcePortRange</a>

---



