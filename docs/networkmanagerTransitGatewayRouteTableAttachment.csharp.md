# `networkmanagerTransitGatewayRouteTableAttachment` Submodule <a name="`networkmanagerTransitGatewayRouteTableAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayRouteTableAttachment <a name="NetworkmanagerTransitGatewayRouteTableAttachment" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment aws_networkmanager_transit_gateway_route_table_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerTransitGatewayRouteTableAttachment(Construct Scope, string Id, NetworkmanagerTransitGatewayRouteTableAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig">NetworkmanagerTransitGatewayRouteTableAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig">NetworkmanagerTransitGatewayRouteTableAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts">NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerTransitGatewayRouteTableAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerTransitGatewayRouteTableAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerTransitGatewayRouteTableAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference">NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringIdInput">PeeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArnInput">TransitGatewayRouteTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId">PeeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn">TransitGatewayRouteTableArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; }
```

- *Type:* string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeouts"></a>

```csharp
public NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference">NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PeeringIdInput`<sup>Optional</sup> <a name="PeeringIdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringIdInput"></a>

```csharp
public string PeeringIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransitGatewayRouteTableArnInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableArnInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArnInput"></a>

```csharp
public string TransitGatewayRouteTableArnInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId"></a>

```csharp
public string PeeringId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayRouteTableArn`<sup>Required</sup> <a name="TransitGatewayRouteTableArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn"></a>

```csharp
public string TransitGatewayRouteTableArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayRouteTableAttachmentConfig <a name="NetworkmanagerTransitGatewayRouteTableAttachmentConfig" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerTransitGatewayRouteTableAttachmentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PeeringId,
    string TransitGatewayRouteTableArn,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.peeringId">PeeringId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#peering_id NetworkmanagerTransitGatewayRouteTableAttachment#peering_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.transitGatewayRouteTableArn">TransitGatewayRouteTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#transit_gateway_route_table_arn NetworkmanagerTransitGatewayRouteTableAttachment#transit_gateway_route_table_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#id NetworkmanagerTransitGatewayRouteTableAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags NetworkmanagerTransitGatewayRouteTableAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags_all NetworkmanagerTransitGatewayRouteTableAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts">NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.peeringId"></a>

```csharp
public string PeeringId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#peering_id NetworkmanagerTransitGatewayRouteTableAttachment#peering_id}.

---

##### `TransitGatewayRouteTableArn`<sup>Required</sup> <a name="TransitGatewayRouteTableArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.transitGatewayRouteTableArn"></a>

```csharp
public string TransitGatewayRouteTableArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#transit_gateway_route_table_arn NetworkmanagerTransitGatewayRouteTableAttachment#transit_gateway_route_table_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#id NetworkmanagerTransitGatewayRouteTableAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags NetworkmanagerTransitGatewayRouteTableAttachment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags_all NetworkmanagerTransitGatewayRouteTableAttachment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.timeouts"></a>

```csharp
public NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts">NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#timeouts NetworkmanagerTransitGatewayRouteTableAttachment#timeouts}

---

### NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts <a name="NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#create NetworkmanagerTransitGatewayRouteTableAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#delete NetworkmanagerTransitGatewayRouteTableAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#create NetworkmanagerTransitGatewayRouteTableAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#delete NetworkmanagerTransitGatewayRouteTableAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



