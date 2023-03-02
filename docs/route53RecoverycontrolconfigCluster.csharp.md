# `route53RecoverycontrolconfigCluster` Submodule <a name="`route53RecoverycontrolconfigCluster` Submodule" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigCluster <a name="Route53RecoverycontrolconfigCluster" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster aws_route53recoverycontrolconfig_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoverycontrolconfigCluster(Construct Scope, string Id, Route53RecoverycontrolconfigClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig">Route53RecoverycontrolconfigClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig">Route53RecoverycontrolconfigClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoverycontrolconfigCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoverycontrolconfigCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoverycontrolconfigCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.clusterEndpoints">ClusterEndpoints</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList">Route53RecoverycontrolconfigClusterClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterEndpoints`<sup>Required</sup> <a name="ClusterEndpoints" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.clusterEndpoints"></a>

```csharp
public Route53RecoverycontrolconfigClusterClusterEndpointsList ClusterEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList">Route53RecoverycontrolconfigClusterClusterEndpointsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigClusterClusterEndpoints <a name="Route53RecoverycontrolconfigClusterClusterEndpoints" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoverycontrolconfigClusterClusterEndpoints {

};
```


### Route53RecoverycontrolconfigClusterConfig <a name="Route53RecoverycontrolconfigClusterConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoverycontrolconfigClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#name Route53RecoverycontrolconfigCluster#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#id Route53RecoverycontrolconfigCluster#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#name Route53RecoverycontrolconfigCluster#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#id Route53RecoverycontrolconfigCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolconfigClusterClusterEndpointsList <a name="Route53RecoverycontrolconfigClusterClusterEndpointsList" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoverycontrolconfigClusterClusterEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.get"></a>

```csharp
private Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference <a name="Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints">Route53RecoverycontrolconfigClusterClusterEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.internalValue"></a>

```csharp
public Route53RecoverycontrolconfigClusterClusterEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints">Route53RecoverycontrolconfigClusterClusterEndpoints</a>

---



