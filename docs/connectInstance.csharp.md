# `connectInstance` Submodule <a name="`connectInstance` Submodule" id="@cdktf/provider-aws.connectInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstance <a name="ConnectInstance" id="@cdktf/provider-aws.connectInstance.ConnectInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance aws_connect_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstance.ConnectInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectInstance(Construct Scope, string Id, ConnectInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.connectInstance.ConnectInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectInstance.ConnectInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.connectInstance.ConnectInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetAutoResolveBestVoicesEnabled">ResetAutoResolveBestVoicesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetContactFlowLogsEnabled">ResetContactFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetContactLensEnabled">ResetContactLensEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetEarlyMediaEnabled">ResetEarlyMediaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetInstanceAlias">ResetInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetMultiPartyConferenceEnabled">ResetMultiPartyConferenceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectInstance.ConnectInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectInstance.ConnectInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.connectInstance.ConnectInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.connectInstance.ConnectInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectInstance.ConnectInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.connectInstance.ConnectInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectInstance.ConnectInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectInstance.ConnectInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.connectInstance.ConnectInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(ConnectInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.connectInstance.ConnectInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts">ConnectInstanceTimeouts</a>

---

##### `ResetAutoResolveBestVoicesEnabled` <a name="ResetAutoResolveBestVoicesEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetAutoResolveBestVoicesEnabled"></a>

```csharp
private void ResetAutoResolveBestVoicesEnabled()
```

##### `ResetContactFlowLogsEnabled` <a name="ResetContactFlowLogsEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetContactFlowLogsEnabled"></a>

```csharp
private void ResetContactFlowLogsEnabled()
```

##### `ResetContactLensEnabled` <a name="ResetContactLensEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetContactLensEnabled"></a>

```csharp
private void ResetContactLensEnabled()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetEarlyMediaEnabled` <a name="ResetEarlyMediaEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetEarlyMediaEnabled"></a>

```csharp
private void ResetEarlyMediaEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceAlias` <a name="ResetInstanceAlias" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetInstanceAlias"></a>

```csharp
private void ResetInstanceAlias()
```

##### `ResetMultiPartyConferenceEnabled` <a name="ResetMultiPartyConferenceEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetMultiPartyConferenceEnabled"></a>

```csharp
private void ResetMultiPartyConferenceEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.connectInstance.ConnectInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectInstance.ConnectInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectInstance.ConnectInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectInstance.ConnectInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectInstance.ConnectInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectInstance.ConnectInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectInstance.ConnectInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference">ConnectInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.autoResolveBestVoicesEnabledInput">AutoResolveBestVoicesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactFlowLogsEnabledInput">ContactFlowLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactLensEnabledInput">ContactLensEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.earlyMediaEnabledInput">EarlyMediaEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.identityManagementTypeInput">IdentityManagementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.inboundCallsEnabledInput">InboundCallsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.instanceAliasInput">InstanceAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.multiPartyConferenceEnabledInput">MultiPartyConferenceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.outboundCallsEnabledInput">OutboundCallsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.autoResolveBestVoicesEnabled">AutoResolveBestVoicesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactFlowLogsEnabled">ContactFlowLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactLensEnabled">ContactLensEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.earlyMediaEnabled">EarlyMediaEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.identityManagementType">IdentityManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.inboundCallsEnabled">InboundCallsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.instanceAlias">InstanceAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.multiPartyConferenceEnabled">MultiPartyConferenceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.outboundCallsEnabled">OutboundCallsEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.timeouts"></a>

```csharp
public ConnectInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference">ConnectInstanceTimeoutsOutputReference</a>

---

##### `AutoResolveBestVoicesEnabledInput`<sup>Optional</sup> <a name="AutoResolveBestVoicesEnabledInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.autoResolveBestVoicesEnabledInput"></a>

```csharp
public object AutoResolveBestVoicesEnabledInput { get; }
```

- *Type:* object

---

##### `ContactFlowLogsEnabledInput`<sup>Optional</sup> <a name="ContactFlowLogsEnabledInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactFlowLogsEnabledInput"></a>

```csharp
public object ContactFlowLogsEnabledInput { get; }
```

- *Type:* object

---

##### `ContactLensEnabledInput`<sup>Optional</sup> <a name="ContactLensEnabledInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactLensEnabledInput"></a>

```csharp
public object ContactLensEnabledInput { get; }
```

- *Type:* object

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `EarlyMediaEnabledInput`<sup>Optional</sup> <a name="EarlyMediaEnabledInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.earlyMediaEnabledInput"></a>

```csharp
public object EarlyMediaEnabledInput { get; }
```

- *Type:* object

---

##### `IdentityManagementTypeInput`<sup>Optional</sup> <a name="IdentityManagementTypeInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.identityManagementTypeInput"></a>

```csharp
public string IdentityManagementTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundCallsEnabledInput`<sup>Optional</sup> <a name="InboundCallsEnabledInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.inboundCallsEnabledInput"></a>

```csharp
public object InboundCallsEnabledInput { get; }
```

- *Type:* object

---

##### `InstanceAliasInput`<sup>Optional</sup> <a name="InstanceAliasInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.instanceAliasInput"></a>

```csharp
public string InstanceAliasInput { get; }
```

- *Type:* string

---

##### `MultiPartyConferenceEnabledInput`<sup>Optional</sup> <a name="MultiPartyConferenceEnabledInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.multiPartyConferenceEnabledInput"></a>

```csharp
public object MultiPartyConferenceEnabledInput { get; }
```

- *Type:* object

---

##### `OutboundCallsEnabledInput`<sup>Optional</sup> <a name="OutboundCallsEnabledInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.outboundCallsEnabledInput"></a>

```csharp
public object OutboundCallsEnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoResolveBestVoicesEnabled`<sup>Required</sup> <a name="AutoResolveBestVoicesEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.autoResolveBestVoicesEnabled"></a>

```csharp
public object AutoResolveBestVoicesEnabled { get; }
```

- *Type:* object

---

##### `ContactFlowLogsEnabled`<sup>Required</sup> <a name="ContactFlowLogsEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactFlowLogsEnabled"></a>

```csharp
public object ContactFlowLogsEnabled { get; }
```

- *Type:* object

---

##### `ContactLensEnabled`<sup>Required</sup> <a name="ContactLensEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.contactLensEnabled"></a>

```csharp
public object ContactLensEnabled { get; }
```

- *Type:* object

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `EarlyMediaEnabled`<sup>Required</sup> <a name="EarlyMediaEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.earlyMediaEnabled"></a>

```csharp
public object EarlyMediaEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityManagementType`<sup>Required</sup> <a name="IdentityManagementType" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.identityManagementType"></a>

```csharp
public string IdentityManagementType { get; }
```

- *Type:* string

---

##### `InboundCallsEnabled`<sup>Required</sup> <a name="InboundCallsEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.inboundCallsEnabled"></a>

```csharp
public object InboundCallsEnabled { get; }
```

- *Type:* object

---

##### `InstanceAlias`<sup>Required</sup> <a name="InstanceAlias" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.instanceAlias"></a>

```csharp
public string InstanceAlias { get; }
```

- *Type:* string

---

##### `MultiPartyConferenceEnabled`<sup>Required</sup> <a name="MultiPartyConferenceEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.multiPartyConferenceEnabled"></a>

```csharp
public object MultiPartyConferenceEnabled { get; }
```

- *Type:* object

---

##### `OutboundCallsEnabled`<sup>Required</sup> <a name="OutboundCallsEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.outboundCallsEnabled"></a>

```csharp
public object OutboundCallsEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectInstance.ConnectInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceConfig <a name="ConnectInstanceConfig" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdentityManagementType,
    object InboundCallsEnabled,
    object OutboundCallsEnabled,
    object AutoResolveBestVoicesEnabled = null,
    object ContactFlowLogsEnabled = null,
    object ContactLensEnabled = null,
    string DirectoryId = null,
    object EarlyMediaEnabled = null,
    string Id = null,
    string InstanceAlias = null,
    object MultiPartyConferenceEnabled = null,
    ConnectInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.identityManagementType">IdentityManagementType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#identity_management_type ConnectInstance#identity_management_type}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.inboundCallsEnabled">InboundCallsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#inbound_calls_enabled ConnectInstance#inbound_calls_enabled}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.outboundCallsEnabled">OutboundCallsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#outbound_calls_enabled ConnectInstance#outbound_calls_enabled}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.autoResolveBestVoicesEnabled">AutoResolveBestVoicesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#auto_resolve_best_voices_enabled ConnectInstance#auto_resolve_best_voices_enabled}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.contactFlowLogsEnabled">ContactFlowLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#contact_flow_logs_enabled ConnectInstance#contact_flow_logs_enabled}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.contactLensEnabled">ContactLensEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#contact_lens_enabled ConnectInstance#contact_lens_enabled}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#directory_id ConnectInstance#directory_id}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.earlyMediaEnabled">EarlyMediaEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#early_media_enabled ConnectInstance#early_media_enabled}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#id ConnectInstance#id}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.instanceAlias">InstanceAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#instance_alias ConnectInstance#instance_alias}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.multiPartyConferenceEnabled">MultiPartyConferenceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#multi_party_conference_enabled ConnectInstance#multi_party_conference_enabled}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts">ConnectInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdentityManagementType`<sup>Required</sup> <a name="IdentityManagementType" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.identityManagementType"></a>

```csharp
public string IdentityManagementType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#identity_management_type ConnectInstance#identity_management_type}.

---

##### `InboundCallsEnabled`<sup>Required</sup> <a name="InboundCallsEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.inboundCallsEnabled"></a>

```csharp
public object InboundCallsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#inbound_calls_enabled ConnectInstance#inbound_calls_enabled}.

---

##### `OutboundCallsEnabled`<sup>Required</sup> <a name="OutboundCallsEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.outboundCallsEnabled"></a>

```csharp
public object OutboundCallsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#outbound_calls_enabled ConnectInstance#outbound_calls_enabled}.

---

##### `AutoResolveBestVoicesEnabled`<sup>Optional</sup> <a name="AutoResolveBestVoicesEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.autoResolveBestVoicesEnabled"></a>

```csharp
public object AutoResolveBestVoicesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#auto_resolve_best_voices_enabled ConnectInstance#auto_resolve_best_voices_enabled}.

---

##### `ContactFlowLogsEnabled`<sup>Optional</sup> <a name="ContactFlowLogsEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.contactFlowLogsEnabled"></a>

```csharp
public object ContactFlowLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#contact_flow_logs_enabled ConnectInstance#contact_flow_logs_enabled}.

---

##### `ContactLensEnabled`<sup>Optional</sup> <a name="ContactLensEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.contactLensEnabled"></a>

```csharp
public object ContactLensEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#contact_lens_enabled ConnectInstance#contact_lens_enabled}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#directory_id ConnectInstance#directory_id}.

---

##### `EarlyMediaEnabled`<sup>Optional</sup> <a name="EarlyMediaEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.earlyMediaEnabled"></a>

```csharp
public object EarlyMediaEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#early_media_enabled ConnectInstance#early_media_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#id ConnectInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceAlias`<sup>Optional</sup> <a name="InstanceAlias" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.instanceAlias"></a>

```csharp
public string InstanceAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#instance_alias ConnectInstance#instance_alias}.

---

##### `MultiPartyConferenceEnabled`<sup>Optional</sup> <a name="MultiPartyConferenceEnabled" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.multiPartyConferenceEnabled"></a>

```csharp
public object MultiPartyConferenceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#multi_party_conference_enabled ConnectInstance#multi_party_conference_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.connectInstance.ConnectInstanceConfig.property.timeouts"></a>

```csharp
public ConnectInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts">ConnectInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#timeouts ConnectInstance#timeouts}

---

### ConnectInstanceTimeouts <a name="ConnectInstanceTimeouts" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectInstanceTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#create ConnectInstance#create}. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#delete ConnectInstance#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#create ConnectInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance#delete ConnectInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceTimeoutsOutputReference <a name="ConnectInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectInstance.ConnectInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



