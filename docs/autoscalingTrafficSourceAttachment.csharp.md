# `aws_autoscaling_traffic_source_attachment`

Refer to the Terraform Registory for docs: [`aws_autoscaling_traffic_source_attachment`](https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment).

# `autoscalingTrafficSourceAttachment` Submodule <a name="`autoscalingTrafficSourceAttachment` Submodule" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingTrafficSourceAttachment <a name="AutoscalingTrafficSourceAttachment" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment aws_autoscaling_traffic_source_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingTrafficSourceAttachment(Construct Scope, string Id, AutoscalingTrafficSourceAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig">AutoscalingTrafficSourceAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig">AutoscalingTrafficSourceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource">PutTrafficSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource">ResetTrafficSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(AutoscalingTrafficSourceAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

---

##### `PutTrafficSource` <a name="PutTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource"></a>

```csharp
private void PutTrafficSource(AutoscalingTrafficSourceAttachmentTrafficSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficSource` <a name="ResetTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource"></a>

```csharp
private void ResetTrafficSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingTrafficSourceAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingTrafficSourceAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingTrafficSourceAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource">TrafficSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput">AutoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput">TrafficSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts"></a>

```csharp
public AutoscalingTrafficSourceAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a>

---

##### `TrafficSource`<sup>Required</sup> <a name="TrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource"></a>

```csharp
public AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference TrafficSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a>

---

##### `AutoscalingGroupNameInput`<sup>Optional</sup> <a name="AutoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput"></a>

```csharp
public string AutoscalingGroupNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrafficSourceInput`<sup>Optional</sup> <a name="TrafficSourceInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput"></a>

```csharp
public AutoscalingTrafficSourceAttachmentTrafficSource TrafficSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName"></a>

```csharp
public string AutoscalingGroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingTrafficSourceAttachmentConfig <a name="AutoscalingTrafficSourceAttachmentConfig" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingTrafficSourceAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutoscalingGroupName,
    string Id = null,
    AutoscalingTrafficSourceAttachmentTimeouts Timeouts = null,
    AutoscalingTrafficSourceAttachmentTrafficSource TrafficSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource">TrafficSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | traffic_source block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName"></a>

```csharp
public string AutoscalingGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts"></a>

```csharp
public AutoscalingTrafficSourceAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#timeouts AutoscalingTrafficSourceAttachment#timeouts}

---

##### `TrafficSource`<sup>Optional</sup> <a name="TrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource"></a>

```csharp
public AutoscalingTrafficSourceAttachmentTrafficSource TrafficSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

traffic_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#traffic_source AutoscalingTrafficSourceAttachment#traffic_source}

---

### AutoscalingTrafficSourceAttachmentTimeouts <a name="AutoscalingTrafficSourceAttachmentTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingTrafficSourceAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}.

---

### AutoscalingTrafficSourceAttachmentTrafficSource <a name="AutoscalingTrafficSourceAttachmentTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingTrafficSourceAttachmentTrafficSource {
    string Identifier,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.17.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingTrafficSourceAttachmentTimeoutsOutputReference <a name="AutoscalingTrafficSourceAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingTrafficSourceAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference <a name="AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue"></a>

```csharp
public AutoscalingTrafficSourceAttachmentTrafficSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---



