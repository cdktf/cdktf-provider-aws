# `configConformancePack` Submodule <a name="`configConformancePack` Submodule" id="@cdktf/provider-aws.configConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConformancePack <a name="ConfigConformancePack" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack aws_config_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConformancePack(Construct Scope, string Id, ConfigConformancePackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.putInputParameter">PutInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket">ResetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix">ResetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetInputParameter">ResetInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetTemplateS3Uri">ResetTemplateS3Uri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInputParameter` <a name="PutInputParameter" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.putInputParameter"></a>

```csharp
private void PutInputParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.putInputParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetDeliveryS3Bucket` <a name="ResetDeliveryS3Bucket" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket"></a>

```csharp
private void ResetDeliveryS3Bucket()
```

##### `ResetDeliveryS3KeyPrefix` <a name="ResetDeliveryS3KeyPrefix" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix"></a>

```csharp
private void ResetDeliveryS3KeyPrefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputParameter` <a name="ResetInputParameter" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetInputParameter"></a>

```csharp
private void ResetInputParameter()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetTemplateBody"></a>

```csharp
private void ResetTemplateBody()
```

##### `ResetTemplateS3Uri` <a name="ResetTemplateS3Uri" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.resetTemplateS3Uri"></a>

```csharp
private void ResetTemplateS3Uri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConformancePack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConformancePack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConformancePack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.inputParameter">InputParameter</a></code> | <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList">ConfigConformancePackInputParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput">DeliveryS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput">DeliveryS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.inputParameterInput">InputParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateBodyInput">TemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateS3UriInput">TemplateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket">DeliveryS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix">DeliveryS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateBody">TemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateS3Uri">TemplateS3Uri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InputParameter`<sup>Required</sup> <a name="InputParameter" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.inputParameter"></a>

```csharp
public ConfigConformancePackInputParameterList InputParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList">ConfigConformancePackInputParameterList</a>

---

##### `DeliveryS3BucketInput`<sup>Optional</sup> <a name="DeliveryS3BucketInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput"></a>

```csharp
public string DeliveryS3BucketInput { get; }
```

- *Type:* string

---

##### `DeliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="DeliveryS3KeyPrefixInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput"></a>

```csharp
public string DeliveryS3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputParameterInput`<sup>Optional</sup> <a name="InputParameterInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.inputParameterInput"></a>

```csharp
public object InputParameterInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateBodyInput"></a>

```csharp
public string TemplateBodyInput { get; }
```

- *Type:* string

---

##### `TemplateS3UriInput`<sup>Optional</sup> <a name="TemplateS3UriInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateS3UriInput"></a>

```csharp
public string TemplateS3UriInput { get; }
```

- *Type:* string

---

##### `DeliveryS3Bucket`<sup>Required</sup> <a name="DeliveryS3Bucket" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket"></a>

```csharp
public string DeliveryS3Bucket { get; }
```

- *Type:* string

---

##### `DeliveryS3KeyPrefix`<sup>Required</sup> <a name="DeliveryS3KeyPrefix" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix"></a>

```csharp
public string DeliveryS3KeyPrefix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateBody"></a>

```csharp
public string TemplateBody { get; }
```

- *Type:* string

---

##### `TemplateS3Uri`<sup>Required</sup> <a name="TemplateS3Uri" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.templateS3Uri"></a>

```csharp
public string TemplateS3Uri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConformancePackConfig <a name="ConfigConformancePackConfig" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConformancePackConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string DeliveryS3Bucket = null,
    string DeliveryS3KeyPrefix = null,
    string Id = null,
    object InputParameter = null,
    string TemplateBody = null,
    string TemplateS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#name ConfigConformancePack#name}. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket">DeliveryS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix">DeliveryS3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#id ConfigConformancePack#id}. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.inputParameter">InputParameter</a></code> | <code>object</code> | input_parameter block. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.templateBody">TemplateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#template_body ConfigConformancePack#template_body}. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri">TemplateS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#name ConfigConformancePack#name}.

---

##### `DeliveryS3Bucket`<sup>Optional</sup> <a name="DeliveryS3Bucket" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket"></a>

```csharp
public string DeliveryS3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}.

---

##### `DeliveryS3KeyPrefix`<sup>Optional</sup> <a name="DeliveryS3KeyPrefix" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```csharp
public string DeliveryS3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#id ConfigConformancePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameter`<sup>Optional</sup> <a name="InputParameter" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.inputParameter"></a>

```csharp
public object InputParameter { get; set; }
```

- *Type:* object

input_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#input_parameter ConfigConformancePack#input_parameter}

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.templateBody"></a>

```csharp
public string TemplateBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#template_body ConfigConformancePack#template_body}.

---

##### `TemplateS3Uri`<sup>Optional</sup> <a name="TemplateS3Uri" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri"></a>

```csharp
public string TemplateS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}.

---

### ConfigConformancePackInputParameter <a name="ConfigConformancePackInputParameter" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConformancePackInputParameter {
    string ParameterName,
    string ParameterValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameter.property.parameterName">ParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameter.property.parameterValue">ParameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}. |

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameter.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}.

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameter.property.parameterValue"></a>

```csharp
public string ParameterValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConformancePackInputParameterList <a name="ConfigConformancePackInputParameterList" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConformancePackInputParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.get"></a>

```csharp
private ConfigConformancePackInputParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigConformancePackInputParameterOutputReference <a name="ConfigConformancePackInputParameterOutputReference" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConformancePackInputParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValueInput"></a>

```csharp
public string ParameterValueInput { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



