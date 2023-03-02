# `route53RecoverycontrolconfigControlPanel` Submodule <a name="`route53RecoverycontrolconfigControlPanel` Submodule" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigControlPanel <a name="Route53RecoverycontrolconfigControlPanel" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel aws_route53recoverycontrolconfig_control_panel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoverycontrolconfigControlPanel(Construct Scope, string Id, Route53RecoverycontrolconfigControlPanelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig">Route53RecoverycontrolconfigControlPanelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig">Route53RecoverycontrolconfigControlPanelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoverycontrolconfigControlPanel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoverycontrolconfigControlPanel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoverycontrolconfigControlPanel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.defaultControlPanel">DefaultControlPanel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.routingControlCount">RoutingControlCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultControlPanel`<sup>Required</sup> <a name="DefaultControlPanel" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.defaultControlPanel"></a>

```csharp
public IResolvable DefaultControlPanel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RoutingControlCount`<sup>Required</sup> <a name="RoutingControlCount" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.routingControlCount"></a>

```csharp
public double RoutingControlCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigControlPanelConfig <a name="Route53RecoverycontrolconfigControlPanelConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoverycontrolconfigControlPanelConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterArn,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#name Route53RecoverycontrolconfigControlPanel#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#id Route53RecoverycontrolconfigControlPanel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#name Route53RecoverycontrolconfigControlPanel#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#id Route53RecoverycontrolconfigControlPanel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



