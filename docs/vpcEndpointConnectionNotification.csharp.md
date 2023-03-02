# `vpcEndpointConnectionNotification` Submodule <a name="`vpcEndpointConnectionNotification` Submodule" id="@cdktf/provider-aws.vpcEndpointConnectionNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointConnectionNotification <a name="VpcEndpointConnectionNotification" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification aws_vpc_endpoint_connection_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointConnectionNotification(Construct Scope, string Id, VpcEndpointConnectionNotificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig">VpcEndpointConnectionNotificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig">VpcEndpointConnectionNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointServiceId">ResetVpcEndpointServiceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointId"></a>

```csharp
private void ResetVpcEndpointId()
```

##### `ResetVpcEndpointServiceId` <a name="ResetVpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointServiceId"></a>

```csharp
private void ResetVpcEndpointServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpointConnectionNotification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpointConnectionNotification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpointConnectionNotification.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEventsInput">ConnectionEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArnInput">ConnectionNotificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceIdInput">VpcEndpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEvents">ConnectionEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArn">ConnectionNotificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ConnectionEventsInput`<sup>Optional</sup> <a name="ConnectionEventsInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEventsInput"></a>

```csharp
public string[] ConnectionEventsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionNotificationArnInput`<sup>Optional</sup> <a name="ConnectionNotificationArnInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArnInput"></a>

```csharp
public string ConnectionNotificationArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `VpcEndpointServiceIdInput`<sup>Optional</sup> <a name="VpcEndpointServiceIdInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceIdInput"></a>

```csharp
public string VpcEndpointServiceIdInput { get; }
```

- *Type:* string

---

##### `ConnectionEvents`<sup>Required</sup> <a name="ConnectionEvents" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEvents"></a>

```csharp
public string[] ConnectionEvents { get; }
```

- *Type:* string[]

---

##### `ConnectionNotificationArn`<sup>Required</sup> <a name="ConnectionNotificationArn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArn"></a>

```csharp
public string ConnectionNotificationArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceId"></a>

```csharp
public string VpcEndpointServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointConnectionNotificationConfig <a name="VpcEndpointConnectionNotificationConfig" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointConnectionNotificationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ConnectionEvents,
    string ConnectionNotificationArn,
    string Id = null,
    string VpcEndpointId = null,
    string VpcEndpointServiceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionEvents">ConnectionEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_events VpcEndpointConnectionNotification#connection_events}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn">ConnectionNotificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#id VpcEndpointConnectionNotification#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionEvents`<sup>Required</sup> <a name="ConnectionEvents" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionEvents"></a>

```csharp
public string[] ConnectionEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_events VpcEndpointConnectionNotification#connection_events}.

---

##### `ConnectionNotificationArn`<sup>Required</sup> <a name="ConnectionNotificationArn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn"></a>

```csharp
public string ConnectionNotificationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#id VpcEndpointConnectionNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}.

---

##### `VpcEndpointServiceId`<sup>Optional</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointServiceId"></a>

```csharp
public string VpcEndpointServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}.

---



