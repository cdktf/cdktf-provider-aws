# `ssoadminInstanceAccessControlAttributes` Submodule <a name="`ssoadminInstanceAccessControlAttributes` Submodule" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminInstanceAccessControlAttributes <a name="SsoadminInstanceAccessControlAttributes" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributes(Construct Scope, string Id, SsoadminInstanceAccessControlAttributesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig">SsoadminInstanceAccessControlAttributesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig">SsoadminInstanceAccessControlAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute"></a>

```csharp
private void PutAttribute(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsoadminInstanceAccessControlAttributes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsoadminInstanceAccessControlAttributes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsoadminInstanceAccessControlAttributes.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute">Attribute</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput">AttributeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute"></a>

```csharp
public SsoadminInstanceAccessControlAttributesAttributeList Attribute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput"></a>

```csharp
public object AttributeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminInstanceAccessControlAttributesAttribute <a name="SsoadminInstanceAccessControlAttributesAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributesAttribute {
    string Key,
    object Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value">Value</a></code> | <code>object</code> | value block. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#value SsoadminInstanceAccessControlAttributes#value}

---

### SsoadminInstanceAccessControlAttributesAttributeValue <a name="SsoadminInstanceAccessControlAttributesAttributeValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributesAttributeValue {
    string[] Source
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source">Source</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source"></a>

```csharp
public string[] Source { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}.

---

### SsoadminInstanceAccessControlAttributesConfig <a name="SsoadminInstanceAccessControlAttributesConfig" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Attribute,
    string InstanceArn,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute">Attribute</a></code> | <code>object</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute"></a>

```csharp
public object Attribute { get; set; }
```

- *Type:* object

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#attribute SsoadminInstanceAccessControlAttributes#attribute}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminInstanceAccessControlAttributesAttributeList <a name="SsoadminInstanceAccessControlAttributesAttributeList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributesAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get"></a>

```csharp
private SsoadminInstanceAccessControlAttributesAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsoadminInstanceAccessControlAttributesAttributeOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributesAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue">PutValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue"></a>

```csharp
private void PutValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value"></a>

```csharp
public SsoadminInstanceAccessControlAttributesAttributeValueList Value { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsoadminInstanceAccessControlAttributesAttributeValueList <a name="SsoadminInstanceAccessControlAttributesAttributeValueList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributesAttributeValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get"></a>

```csharp
private SsoadminInstanceAccessControlAttributesAttributeValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsoadminInstanceAccessControlAttributesAttributeValueOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeValueOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsoadminInstanceAccessControlAttributesAttributeValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput">SourceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source">Source</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput"></a>

```csharp
public string[] SourceInput { get; }
```

- *Type:* string[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source"></a>

```csharp
public string[] Source { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



