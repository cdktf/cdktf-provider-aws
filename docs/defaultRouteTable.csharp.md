# `defaultRouteTable` Submodule <a name="`defaultRouteTable` Submodule" id="@cdktf/provider-aws.defaultRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultRouteTable <a name="DefaultRouteTable" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table aws_default_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultRouteTable(Construct Scope, string Id, DefaultRouteTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig">DefaultRouteTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig">DefaultRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute">PutRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws">ResetPropagatingVgws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetRoute">ResetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRoute` <a name="PutRoute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute"></a>

```csharp
private void PutRoute(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts"></a>

```csharp
private void PutTimeouts(DefaultRouteTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPropagatingVgws` <a name="ResetPropagatingVgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws"></a>

```csharp
private void ResetPropagatingVgws()
```

##### `ResetRoute` <a name="ResetRoute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetRoute"></a>

```csharp
private void ResetRoute()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultRouteTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultRouteTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultRouteTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.route">Route</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput">DefaultRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput">PropagatingVgwsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.routeInput">RouteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId">DefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgws">PropagatingVgws</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.route"></a>

```csharp
public DefaultRouteTableRouteList Route { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeouts"></a>

```csharp
public DefaultRouteTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `DefaultRouteTableIdInput`<sup>Optional</sup> <a name="DefaultRouteTableIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput"></a>

```csharp
public string DefaultRouteTableIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PropagatingVgwsInput`<sup>Optional</sup> <a name="PropagatingVgwsInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput"></a>

```csharp
public string[] PropagatingVgwsInput { get; }
```

- *Type:* string[]

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.routeInput"></a>

```csharp
public object RouteInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefaultRouteTableId`<sup>Required</sup> <a name="DefaultRouteTableId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId"></a>

```csharp
public string DefaultRouteTableId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PropagatingVgws`<sup>Required</sup> <a name="PropagatingVgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgws"></a>

```csharp
public string[] PropagatingVgws { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultRouteTableConfig <a name="DefaultRouteTableConfig" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultRouteTableConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultRouteTableId,
    string Id = null,
    string[] PropagatingVgws = null,
    object Route = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DefaultRouteTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId">DefaultRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws">PropagatingVgws</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.route">Route</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultRouteTableId`<sup>Required</sup> <a name="DefaultRouteTableId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId"></a>

```csharp
public string DefaultRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PropagatingVgws`<sup>Optional</sup> <a name="PropagatingVgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws"></a>

```csharp
public string[] PropagatingVgws { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}.

---

##### `Route`<sup>Optional</sup> <a name="Route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.route"></a>

```csharp
public object Route { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.timeouts"></a>

```csharp
public DefaultRouteTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#timeouts DefaultRouteTable#timeouts}

---

### DefaultRouteTableRoute <a name="DefaultRouteTableRoute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultRouteTableRoute {
    string CidrBlock = null,
    string CoreNetworkArn = null,
    string DestinationPrefixListId = null,
    string EgressOnlyGatewayId = null,
    string GatewayId = null,
    string InstanceId = null,
    string Ipv6CidrBlock = null,
    string NatGatewayId = null,
    string NetworkInterfaceId = null,
    string TransitGatewayId = null,
    string VpcEndpointId = null,
    string VpcPeeringConnectionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#cidr_block DefaultRouteTable#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#core_network_arn DefaultRouteTable#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId">EgressOnlyGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#gateway_id DefaultRouteTable#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#instance_id DefaultRouteTable#instance_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId">NatGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}. |

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#cidr_block DefaultRouteTable#cidr_block}.

---

##### `CoreNetworkArn`<sup>Optional</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#core_network_arn DefaultRouteTable#core_network_arn}.

---

##### `DestinationPrefixListId`<sup>Optional</sup> <a name="DestinationPrefixListId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}.

---

##### `EgressOnlyGatewayId`<sup>Optional</sup> <a name="EgressOnlyGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId"></a>

```csharp
public string EgressOnlyGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}.

---

##### `GatewayId`<sup>Optional</sup> <a name="GatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#gateway_id DefaultRouteTable#gateway_id}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#instance_id DefaultRouteTable#instance_id}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}.

---

##### `NatGatewayId`<sup>Optional</sup> <a name="NatGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId"></a>

```csharp
public string NatGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}.

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}.

---

##### `VpcPeeringConnectionId`<sup>Optional</sup> <a name="VpcPeeringConnectionId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}.

---

### DefaultRouteTableTimeouts <a name="DefaultRouteTableTimeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultRouteTableTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#create DefaultRouteTable#create}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#update DefaultRouteTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#create DefaultRouteTable#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#update DefaultRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultRouteTableRouteList <a name="DefaultRouteTableRouteList" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultRouteTableRouteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get"></a>

```csharp
private DefaultRouteTableRouteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultRouteTableRouteOutputReference <a name="DefaultRouteTableRouteOutputReference" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultRouteTableRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCoreNetworkArn">ResetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId">ResetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId">ResetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId">ResetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId">ResetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId">ResetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetCoreNetworkArn` <a name="ResetCoreNetworkArn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCoreNetworkArn"></a>

```csharp
private void ResetCoreNetworkArn()
```

##### `ResetDestinationPrefixListId` <a name="ResetDestinationPrefixListId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId"></a>

```csharp
private void ResetDestinationPrefixListId()
```

##### `ResetEgressOnlyGatewayId` <a name="ResetEgressOnlyGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId"></a>

```csharp
private void ResetEgressOnlyGatewayId()
```

##### `ResetGatewayId` <a name="ResetGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId"></a>

```csharp
private void ResetGatewayId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetNatGatewayId` <a name="ResetNatGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId"></a>

```csharp
private void ResetNatGatewayId()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId"></a>

```csharp
private void ResetVpcEndpointId()
```

##### `ResetVpcPeeringConnectionId` <a name="ResetVpcPeeringConnectionId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId"></a>

```csharp
private void ResetVpcPeeringConnectionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArnInput">CoreNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput">DestinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput">EgressOnlyGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput">NatGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput">VpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId">EgressOnlyGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId">NatGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `CoreNetworkArnInput`<sup>Optional</sup> <a name="CoreNetworkArnInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArnInput"></a>

```csharp
public string CoreNetworkArnInput { get; }
```

- *Type:* string

---

##### `DestinationPrefixListIdInput`<sup>Optional</sup> <a name="DestinationPrefixListIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput"></a>

```csharp
public string DestinationPrefixListIdInput { get; }
```

- *Type:* string

---

##### `EgressOnlyGatewayIdInput`<sup>Optional</sup> <a name="EgressOnlyGatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput"></a>

```csharp
public string EgressOnlyGatewayIdInput { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `NatGatewayIdInput`<sup>Optional</sup> <a name="NatGatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput"></a>

```csharp
public string NatGatewayIdInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `VpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="VpcPeeringConnectionIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput"></a>

```csharp
public string VpcPeeringConnectionIdInput { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `DestinationPrefixListId`<sup>Required</sup> <a name="DestinationPrefixListId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; }
```

- *Type:* string

---

##### `EgressOnlyGatewayId`<sup>Required</sup> <a name="EgressOnlyGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId"></a>

```csharp
public string EgressOnlyGatewayId { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `NatGatewayId`<sup>Required</sup> <a name="NatGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId"></a>

```csharp
public string NatGatewayId { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultRouteTableTimeoutsOutputReference <a name="DefaultRouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultRouteTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



