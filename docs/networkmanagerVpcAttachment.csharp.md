# `networkmanagerVpcAttachment` Submodule <a name="`networkmanagerVpcAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerVpcAttachment <a name="NetworkmanagerVpcAttachment" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment aws_networkmanager_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerVpcAttachment(Construct Scope, string Id, NetworkmanagerVpcAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig">NetworkmanagerVpcAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig">NetworkmanagerVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions"></a>

```csharp
private void PutOptions(NetworkmanagerVpcAttachmentOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkmanagerVpcAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerVpcAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerVpcAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerVpcAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options">Options</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference">NetworkmanagerVpcAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput">SubnetArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput">VpcArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn">VpcArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options"></a>

```csharp
public NetworkmanagerVpcAttachmentOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a>

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeouts"></a>

```csharp
public NetworkmanagerVpcAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference">NetworkmanagerVpcAttachmentTimeoutsOutputReference</a>

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput"></a>

```csharp
public NetworkmanagerVpcAttachmentOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `SubnetArnsInput`<sup>Optional</sup> <a name="SubnetArnsInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput"></a>

```csharp
public string[] SubnetArnsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcArnInput`<sup>Optional</sup> <a name="VpcArnInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput"></a>

```csharp
public string VpcArnInput { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn"></a>

```csharp
public string VpcArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerVpcAttachmentConfig <a name="NetworkmanagerVpcAttachmentConfig" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerVpcAttachmentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CoreNetworkId,
    string[] SubnetArns,
    string VpcArn,
    string Id = null,
    NetworkmanagerVpcAttachmentOptions Options = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    NetworkmanagerVpcAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn">VpcArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options">Options</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}.

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}.

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn"></a>

```csharp
public string VpcArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options"></a>

```csharp
public NetworkmanagerVpcAttachmentOptions Options { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.timeouts"></a>

```csharp
public NetworkmanagerVpcAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#timeouts NetworkmanagerVpcAttachment#timeouts}

---

### NetworkmanagerVpcAttachmentOptions <a name="NetworkmanagerVpcAttachmentOptions" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerVpcAttachmentOptions {
    object ApplianceModeSupport = null,
    object Ipv6Support = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support">Ipv6Support</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}. |

---

##### `ApplianceModeSupport`<sup>Optional</sup> <a name="ApplianceModeSupport" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport"></a>

```csharp
public object ApplianceModeSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}.

---

##### `Ipv6Support`<sup>Optional</sup> <a name="Ipv6Support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support"></a>

```csharp
public object Ipv6Support { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}.

---

### NetworkmanagerVpcAttachmentTimeouts <a name="NetworkmanagerVpcAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerVpcAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerVpcAttachmentOptionsOutputReference <a name="NetworkmanagerVpcAttachmentOptionsOutputReference" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerVpcAttachmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">ResetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support">ResetIpv6Support</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplianceModeSupport` <a name="ResetApplianceModeSupport" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```csharp
private void ResetApplianceModeSupport()
```

##### `ResetIpv6Support` <a name="ResetIpv6Support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```csharp
private void ResetIpv6Support()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">ApplianceModeSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">Ipv6SupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support">Ipv6Support</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplianceModeSupportInput`<sup>Optional</sup> <a name="ApplianceModeSupportInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```csharp
public object ApplianceModeSupportInput { get; }
```

- *Type:* object

---

##### `Ipv6SupportInput`<sup>Optional</sup> <a name="Ipv6SupportInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```csharp
public object Ipv6SupportInput { get; }
```

- *Type:* object

---

##### `ApplianceModeSupport`<sup>Required</sup> <a name="ApplianceModeSupport" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```csharp
public object ApplianceModeSupport { get; }
```

- *Type:* object

---

##### `Ipv6Support`<sup>Required</sup> <a name="Ipv6Support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```csharp
public object Ipv6Support { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```csharp
public NetworkmanagerVpcAttachmentOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---


### NetworkmanagerVpcAttachmentTimeoutsOutputReference <a name="NetworkmanagerVpcAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerVpcAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



