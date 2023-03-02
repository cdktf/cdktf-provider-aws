# `ec2NetworkInsightsPath` Submodule <a name="`ec2NetworkInsightsPath` Submodule" id="@cdktf/provider-aws.ec2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsPath <a name="Ec2NetworkInsightsPath" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path aws_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPath(Construct Scope, string Id, Ec2NetworkInsightsPathConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig">Ec2NetworkInsightsPathConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig">Ec2NetworkInsightsPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp">ResetDestinationIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDestinationIp` <a name="ResetDestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp"></a>

```csharp
private void ResetDestinationIp()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort"></a>

```csharp
private void ResetDestinationPort()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp"></a>

```csharp
private void ResetSourceIp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2NetworkInsightsPath.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2NetworkInsightsPath.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2NetworkInsightsPath.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput">DestinationIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput">DestinationPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput">SourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp">DestinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DestinationIpInput`<sup>Optional</sup> <a name="DestinationIpInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput"></a>

```csharp
public string DestinationIpInput { get; }
```

- *Type:* string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput"></a>

```csharp
public double DestinationPortInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput"></a>

```csharp
public string SourceIpInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DestinationIp`<sup>Required</sup> <a name="DestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp"></a>

```csharp
public string DestinationIp { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsPathConfig <a name="Ec2NetworkInsightsPathConfig" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Destination,
    string Protocol,
    string Source,
    string DestinationIp = null,
    double DestinationPort = null,
    string Id = null,
    string SourceIp = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp">DestinationIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort">DestinationPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp">SourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}.

---

##### `DestinationIp`<sup>Optional</sup> <a name="DestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp"></a>

```csharp
public string DestinationIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort"></a>

```csharp
public double DestinationPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp"></a>

```csharp
public string SourceIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}.

---



