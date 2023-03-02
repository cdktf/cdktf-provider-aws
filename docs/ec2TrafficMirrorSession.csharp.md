# `ec2TrafficMirrorSession` Submodule <a name="`ec2TrafficMirrorSession` Submodule" id="@cdktf/provider-aws.ec2TrafficMirrorSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorSession <a name="Ec2TrafficMirrorSession" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session aws_ec2_traffic_mirror_session}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorSession(Construct Scope, string Id, Ec2TrafficMirrorSessionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig">Ec2TrafficMirrorSessionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig">Ec2TrafficMirrorSessionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength">ResetPacketLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPacketLength` <a name="ResetPacketLength" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength"></a>

```csharp
private void ResetPacketLength()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TrafficMirrorSession.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TrafficMirrorSession.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TrafficMirrorSession.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput">PacketLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput">SessionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput">TrafficMirrorFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput">TrafficMirrorTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength">PacketLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber">SessionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId">TrafficMirrorFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId">TrafficMirrorTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PacketLengthInput`<sup>Optional</sup> <a name="PacketLengthInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput"></a>

```csharp
public double PacketLengthInput { get; }
```

- *Type:* double

---

##### `SessionNumberInput`<sup>Optional</sup> <a name="SessionNumberInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput"></a>

```csharp
public double SessionNumberInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrafficMirrorFilterIdInput`<sup>Optional</sup> <a name="TrafficMirrorFilterIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput"></a>

```csharp
public string TrafficMirrorFilterIdInput { get; }
```

- *Type:* string

---

##### `TrafficMirrorTargetIdInput`<sup>Optional</sup> <a name="TrafficMirrorTargetIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput"></a>

```csharp
public string TrafficMirrorTargetIdInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput"></a>

```csharp
public double VirtualNetworkIdInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PacketLength`<sup>Required</sup> <a name="PacketLength" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength"></a>

```csharp
public double PacketLength { get; }
```

- *Type:* double

---

##### `SessionNumber`<sup>Required</sup> <a name="SessionNumber" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber"></a>

```csharp
public double SessionNumber { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrafficMirrorFilterId`<sup>Required</sup> <a name="TrafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId"></a>

```csharp
public string TrafficMirrorFilterId { get; }
```

- *Type:* string

---

##### `TrafficMirrorTargetId`<sup>Required</sup> <a name="TrafficMirrorTargetId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId"></a>

```csharp
public string TrafficMirrorTargetId { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId"></a>

```csharp
public double VirtualNetworkId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorSessionConfig <a name="Ec2TrafficMirrorSessionConfig" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TrafficMirrorSessionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkInterfaceId,
    double SessionNumber,
    string TrafficMirrorFilterId,
    string TrafficMirrorTargetId,
    string Description = null,
    string Id = null,
    double PacketLength = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber">SessionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId">TrafficMirrorFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId">TrafficMirrorTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength">PacketLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}.

---

##### `SessionNumber`<sup>Required</sup> <a name="SessionNumber" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber"></a>

```csharp
public double SessionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}.

---

##### `TrafficMirrorFilterId`<sup>Required</sup> <a name="TrafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId"></a>

```csharp
public string TrafficMirrorFilterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}.

---

##### `TrafficMirrorTargetId`<sup>Required</sup> <a name="TrafficMirrorTargetId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId"></a>

```csharp
public string TrafficMirrorTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PacketLength`<sup>Optional</sup> <a name="PacketLength" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength"></a>

```csharp
public double PacketLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId"></a>

```csharp
public double VirtualNetworkId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}.

---



