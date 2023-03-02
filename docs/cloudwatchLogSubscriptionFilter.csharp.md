# `cloudwatchLogSubscriptionFilter` Submodule <a name="`cloudwatchLogSubscriptionFilter` Submodule" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogSubscriptionFilter <a name="CloudwatchLogSubscriptionFilter" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter aws_cloudwatch_log_subscription_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchLogSubscriptionFilter(Construct Scope, string Id, CloudwatchLogSubscriptionFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig">CloudwatchLogSubscriptionFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig">CloudwatchLogSubscriptionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetDistribution">ResetDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDistribution` <a name="ResetDistribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetDistribution"></a>

```csharp
private void ResetDistribution()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchLogSubscriptionFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchLogSubscriptionFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchLogSubscriptionFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distributionInput">DistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPatternInput">FilterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distribution">Distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPattern">FilterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `DistributionInput`<sup>Optional</sup> <a name="DistributionInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distributionInput"></a>

```csharp
public string DistributionInput { get; }
```

- *Type:* string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPatternInput"></a>

```csharp
public string FilterPatternInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distribution"></a>

```csharp
public string Distribution { get; }
```

- *Type:* string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPattern"></a>

```csharp
public string FilterPattern { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogSubscriptionFilterConfig <a name="CloudwatchLogSubscriptionFilterConfig" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchLogSubscriptionFilterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DestinationArn,
    string FilterPattern,
    string LogGroupName,
    string Name,
    string Distribution = null,
    string Id = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.destinationArn">DestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.filterPattern">FilterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.distribution">Distribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}.

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.filterPattern"></a>

```csharp
public string FilterPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}.

---

##### `Distribution`<sup>Optional</sup> <a name="Distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.distribution"></a>

```csharp
public string Distribution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}.

---



