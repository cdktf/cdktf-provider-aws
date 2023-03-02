# `gameliftGameServerGroup` Submodule <a name="`gameliftGameServerGroup` Submodule" id="@cdktf/provider-aws.gameliftGameServerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameServerGroup <a name="GameliftGameServerGroup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group aws_gamelift_game_server_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroup(Construct Scope, string Id, GameliftGameServerGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig">GameliftGameServerGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig">GameliftGameServerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy">PutAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition">PutInstanceDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy">ResetAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy">ResetBalancingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy">ResetGameServerProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets">ResetVpcSubnets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoScalingPolicy` <a name="PutAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy"></a>

```csharp
private void PutAutoScalingPolicy(GameliftGameServerGroupAutoScalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `PutInstanceDefinition` <a name="PutInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition"></a>

```csharp
private void PutInstanceDefinition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition.parameter.value"></a>

- *Type:* object

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate"></a>

```csharp
private void PutLaunchTemplate(GameliftGameServerGroupLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GameliftGameServerGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

---

##### `ResetAutoScalingPolicy` <a name="ResetAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy"></a>

```csharp
private void ResetAutoScalingPolicy()
```

##### `ResetBalancingStrategy` <a name="ResetBalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy"></a>

```csharp
private void ResetBalancingStrategy()
```

##### `ResetGameServerProtectionPolicy` <a name="ResetGameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy"></a>

```csharp
private void ResetGameServerProtectionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcSubnets` <a name="ResetVpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets"></a>

```csharp
private void ResetVpcSubnets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GameliftGameServerGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GameliftGameServerGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GameliftGameServerGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn">AutoScalingGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy">AutoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition">InstanceDefinition</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput">AutoScalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput">BalancingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput">GameServerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput">GameServerProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput">InstanceDefinitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput">VpcSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy">BalancingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName">GameServerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy">GameServerProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets">VpcSubnets</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoScalingGroupArn`<sup>Required</sup> <a name="AutoScalingGroupArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn"></a>

```csharp
public string AutoScalingGroupArn { get; }
```

- *Type:* string

---

##### `AutoScalingPolicy`<sup>Required</sup> <a name="AutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicyOutputReference AutoScalingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a>

---

##### `InstanceDefinition`<sup>Required</sup> <a name="InstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition"></a>

```csharp
public GameliftGameServerGroupInstanceDefinitionList InstanceDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a>

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate"></a>

```csharp
public GameliftGameServerGroupLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts"></a>

```csharp
public GameliftGameServerGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a>

---

##### `AutoScalingPolicyInput`<sup>Optional</sup> <a name="AutoScalingPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicy AutoScalingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `BalancingStrategyInput`<sup>Optional</sup> <a name="BalancingStrategyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput"></a>

```csharp
public string BalancingStrategyInput { get; }
```

- *Type:* string

---

##### `GameServerGroupNameInput`<sup>Optional</sup> <a name="GameServerGroupNameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput"></a>

```csharp
public string GameServerGroupNameInput { get; }
```

- *Type:* string

---

##### `GameServerProtectionPolicyInput`<sup>Optional</sup> <a name="GameServerProtectionPolicyInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput"></a>

```csharp
public string GameServerProtectionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceDefinitionInput`<sup>Optional</sup> <a name="InstanceDefinitionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput"></a>

```csharp
public object InstanceDefinitionInput { get; }
```

- *Type:* object

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput"></a>

```csharp
public GameliftGameServerGroupLaunchTemplate LaunchTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcSubnetsInput`<sup>Optional</sup> <a name="VpcSubnetsInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput"></a>

```csharp
public string[] VpcSubnetsInput { get; }
```

- *Type:* string[]

---

##### `BalancingStrategy`<sup>Required</sup> <a name="BalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy"></a>

```csharp
public string BalancingStrategy { get; }
```

- *Type:* string

---

##### `GameServerGroupName`<sup>Required</sup> <a name="GameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName"></a>

```csharp
public string GameServerGroupName { get; }
```

- *Type:* string

---

##### `GameServerProtectionPolicy`<sup>Required</sup> <a name="GameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy"></a>

```csharp
public string GameServerProtectionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcSubnets`<sup>Required</sup> <a name="VpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets"></a>

```csharp
public string[] VpcSubnets { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameServerGroupAutoScalingPolicy <a name="GameliftGameServerGroupAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupAutoScalingPolicy {
    GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration TargetTrackingConfiguration,
    double EstimatedInstanceWarmup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration">TargetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | target_tracking_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup">EstimatedInstanceWarmup</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}. |

---

##### `TargetTrackingConfiguration`<sup>Required</sup> <a name="TargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration TargetTrackingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}

---

##### `EstimatedInstanceWarmup`<sup>Optional</sup> <a name="EstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup"></a>

```csharp
public double EstimatedInstanceWarmup { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}.

---

### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration {
    double TargetValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue">TargetValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}. |

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}.

---

### GameliftGameServerGroupConfig <a name="GameliftGameServerGroupConfig" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GameServerGroupName,
    object InstanceDefinition,
    GameliftGameServerGroupLaunchTemplate LaunchTemplate,
    double MaxSize,
    double MinSize,
    string RoleArn,
    GameliftGameServerGroupAutoScalingPolicy AutoScalingPolicy = null,
    string BalancingStrategy = null,
    string GameServerProtectionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    GameliftGameServerGroupTimeouts Timeouts = null,
    string[] VpcSubnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName">GameServerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition">InstanceDefinition</a></code> | <code>object</code> | instance_definition block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy">AutoScalingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | auto_scaling_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy">BalancingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy">GameServerProtectionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets">VpcSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GameServerGroupName`<sup>Required</sup> <a name="GameServerGroupName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName"></a>

```csharp
public string GameServerGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}.

---

##### `InstanceDefinition`<sup>Required</sup> <a name="InstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition"></a>

```csharp
public object InstanceDefinition { get; set; }
```

- *Type:* object

instance_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate"></a>

```csharp
public GameliftGameServerGroupLaunchTemplate LaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}.

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}.

---

##### `AutoScalingPolicy`<sup>Optional</sup> <a name="AutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicy AutoScalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

auto_scaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}

---

##### `BalancingStrategy`<sup>Optional</sup> <a name="BalancingStrategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy"></a>

```csharp
public string BalancingStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}.

---

##### `GameServerProtectionPolicy`<sup>Optional</sup> <a name="GameServerProtectionPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy"></a>

```csharp
public string GameServerProtectionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts"></a>

```csharp
public GameliftGameServerGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}

---

##### `VpcSubnets`<sup>Optional</sup> <a name="VpcSubnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets"></a>

```csharp
public string[] VpcSubnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}.

---

### GameliftGameServerGroupInstanceDefinition <a name="GameliftGameServerGroupInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupInstanceDefinition {
    string InstanceType,
    string WeightedCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity">WeightedCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}. |

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}.

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity"></a>

```csharp
public string WeightedCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}.

---

### GameliftGameServerGroupLaunchTemplate <a name="GameliftGameServerGroupLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupLaunchTemplate {
    string Id = null,
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}.

---

### GameliftGameServerGroupTimeouts <a name="GameliftGameServerGroupTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameServerGroupAutoScalingPolicyOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupAutoScalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration">PutTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup">ResetEstimatedInstanceWarmup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTrackingConfiguration` <a name="PutTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration"></a>

```csharp
private void PutTargetTrackingConfiguration(GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `ResetEstimatedInstanceWarmup` <a name="ResetEstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup"></a>

```csharp
private void ResetEstimatedInstanceWarmup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration">TargetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput">EstimatedInstanceWarmupInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput">TargetTrackingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup">EstimatedInstanceWarmup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetTrackingConfiguration`<sup>Required</sup> <a name="TargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference TargetTrackingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `EstimatedInstanceWarmupInput`<sup>Optional</sup> <a name="EstimatedInstanceWarmupInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput"></a>

```csharp
public double EstimatedInstanceWarmupInput { get; }
```

- *Type:* double

---

##### `TargetTrackingConfigurationInput`<sup>Optional</sup> <a name="TargetTrackingConfigurationInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration TargetTrackingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `EstimatedInstanceWarmup`<sup>Required</sup> <a name="EstimatedInstanceWarmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup"></a>

```csharp
public double EstimatedInstanceWarmup { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---


### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```csharp
public GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---


### GameliftGameServerGroupInstanceDefinitionList <a name="GameliftGameServerGroupInstanceDefinitionList" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupInstanceDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get"></a>

```csharp
private GameliftGameServerGroupInstanceDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GameliftGameServerGroupInstanceDefinitionOutputReference <a name="GameliftGameServerGroupInstanceDefinitionOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupInstanceDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity"></a>

```csharp
private void ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput"></a>

```csharp
public string WeightedCapacityInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity"></a>

```csharp
public string WeightedCapacity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GameliftGameServerGroupLaunchTemplateOutputReference <a name="GameliftGameServerGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public GameliftGameServerGroupLaunchTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---


### GameliftGameServerGroupTimeoutsOutputReference <a name="GameliftGameServerGroupTimeoutsOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GameliftGameServerGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



