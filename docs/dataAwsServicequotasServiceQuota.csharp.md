# `dataAwsServicequotasServiceQuota` Submodule <a name="`dataAwsServicequotasServiceQuota` Submodule" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicequotasServiceQuota <a name="DataAwsServicequotasServiceQuota" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota aws_servicequotas_service_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicequotasServiceQuota(Construct Scope, string Id, DataAwsServicequotasServiceQuotaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig">DataAwsServicequotasServiceQuotaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig">DataAwsServicequotasServiceQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaCode">ResetQuotaCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaName">ResetQuotaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQuotaCode` <a name="ResetQuotaCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaCode"></a>

```csharp
private void ResetQuotaCode()
```

##### `ResetQuotaName` <a name="ResetQuotaName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaName"></a>

```csharp
private void ResetQuotaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicequotasServiceQuota.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicequotasServiceQuota.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicequotasServiceQuota.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.adjustable">Adjustable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.defaultValue">DefaultValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.globalQuota">GlobalQuota</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCodeInput">QuotaCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaNameInput">QuotaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCodeInput">ServiceCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCode">QuotaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaName">QuotaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCode">ServiceCode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Adjustable`<sup>Required</sup> <a name="Adjustable" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.adjustable"></a>

```csharp
public IResolvable Adjustable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.defaultValue"></a>

```csharp
public double DefaultValue { get; }
```

- *Type:* double

---

##### `GlobalQuota`<sup>Required</sup> <a name="GlobalQuota" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.globalQuota"></a>

```csharp
public IResolvable GlobalQuota { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QuotaCodeInput`<sup>Optional</sup> <a name="QuotaCodeInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCodeInput"></a>

```csharp
public string QuotaCodeInput { get; }
```

- *Type:* string

---

##### `QuotaNameInput`<sup>Optional</sup> <a name="QuotaNameInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaNameInput"></a>

```csharp
public string QuotaNameInput { get; }
```

- *Type:* string

---

##### `ServiceCodeInput`<sup>Optional</sup> <a name="ServiceCodeInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCodeInput"></a>

```csharp
public string ServiceCodeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QuotaCode`<sup>Required</sup> <a name="QuotaCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCode"></a>

```csharp
public string QuotaCode { get; }
```

- *Type:* string

---

##### `QuotaName`<sup>Required</sup> <a name="QuotaName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaName"></a>

```csharp
public string QuotaName { get; }
```

- *Type:* string

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCode"></a>

```csharp
public string ServiceCode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicequotasServiceQuotaConfig <a name="DataAwsServicequotasServiceQuotaConfig" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicequotasServiceQuotaConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServiceCode,
    string Id = null,
    string QuotaCode = null,
    string QuotaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.serviceCode">ServiceCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaCode">QuotaCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaName">QuotaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.serviceCode"></a>

```csharp
public string ServiceCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QuotaCode`<sup>Optional</sup> <a name="QuotaCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaCode"></a>

```csharp
public string QuotaCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}.

---

##### `QuotaName`<sup>Optional</sup> <a name="QuotaName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaName"></a>

```csharp
public string QuotaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}.

---



