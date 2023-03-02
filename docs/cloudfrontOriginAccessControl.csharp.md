# `cloudfrontOriginAccessControl` Submodule <a name="`cloudfrontOriginAccessControl` Submodule" id="@cdktf/provider-aws.cloudfrontOriginAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessControl <a name="CloudfrontOriginAccessControl" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control aws_cloudfront_origin_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginAccessControl(Construct Scope, string Id, CloudfrontOriginAccessControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig">CloudfrontOriginAccessControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig">CloudfrontOriginAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginAccessControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginAccessControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginAccessControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginTypeInput">OriginAccessControlOriginTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehaviorInput">SigningBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocolInput">SigningProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginType">OriginAccessControlOriginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehavior">SigningBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocol">SigningProtocol</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OriginAccessControlOriginTypeInput`<sup>Optional</sup> <a name="OriginAccessControlOriginTypeInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginTypeInput"></a>

```csharp
public string OriginAccessControlOriginTypeInput { get; }
```

- *Type:* string

---

##### `SigningBehaviorInput`<sup>Optional</sup> <a name="SigningBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehaviorInput"></a>

```csharp
public string SigningBehaviorInput { get; }
```

- *Type:* string

---

##### `SigningProtocolInput`<sup>Optional</sup> <a name="SigningProtocolInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocolInput"></a>

```csharp
public string SigningProtocolInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginAccessControlOriginType`<sup>Required</sup> <a name="OriginAccessControlOriginType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginType"></a>

```csharp
public string OriginAccessControlOriginType { get; }
```

- *Type:* string

---

##### `SigningBehavior`<sup>Required</sup> <a name="SigningBehavior" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehavior"></a>

```csharp
public string SigningBehavior { get; }
```

- *Type:* string

---

##### `SigningProtocol`<sup>Required</sup> <a name="SigningProtocol" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocol"></a>

```csharp
public string SigningProtocol { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessControlConfig <a name="CloudfrontOriginAccessControlConfig" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginAccessControlConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string OriginAccessControlOriginType,
    string SigningBehavior,
    string SigningProtocol,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlOriginType">OriginAccessControlOriginType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingBehavior">SigningBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingProtocol">SigningProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#id CloudfrontOriginAccessControl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}.

---

##### `OriginAccessControlOriginType`<sup>Required</sup> <a name="OriginAccessControlOriginType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlOriginType"></a>

```csharp
public string OriginAccessControlOriginType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}.

---

##### `SigningBehavior`<sup>Required</sup> <a name="SigningBehavior" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingBehavior"></a>

```csharp
public string SigningBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}.

---

##### `SigningProtocol`<sup>Required</sup> <a name="SigningProtocol" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingProtocol"></a>

```csharp
public string SigningProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#id CloudfrontOriginAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



