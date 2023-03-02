# `worklinkFleet` Submodule <a name="`worklinkFleet` Submodule" id="@cdktf/provider-aws.worklinkFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkFleet <a name="WorklinkFleet" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet aws_worklink_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkFleet(Construct Scope, string Id, WorklinkFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig">WorklinkFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig">WorklinkFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider">PutIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn">ResetAuditStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate">ResetDeviceCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider">ResetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation">ResetOptimizeForEndUserLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIdentityProvider` <a name="PutIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider"></a>

```csharp
private void PutIdentityProvider(WorklinkFleetIdentityProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork"></a>

```csharp
private void PutNetwork(WorklinkFleetNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `ResetAuditStreamArn` <a name="ResetAuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn"></a>

```csharp
private void ResetAuditStreamArn()
```

##### `ResetDeviceCaCertificate` <a name="ResetDeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate"></a>

```csharp
private void ResetDeviceCaCertificate()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProvider` <a name="ResetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider"></a>

```csharp
private void ResetIdentityProvider()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetOptimizeForEndUserLocation` <a name="ResetOptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation"></a>

```csharp
private void ResetOptimizeForEndUserLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorklinkFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorklinkFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorklinkFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode">CompanyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider">IdentityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network">Network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput">AuditStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput">DeviceCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput">IdentityProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput">OptimizeForEndUserLocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn">AuditStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate">DeviceCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation">OptimizeForEndUserLocation</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CompanyCode`<sup>Required</sup> <a name="CompanyCode" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode"></a>

```csharp
public string CompanyCode { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider"></a>

```csharp
public WorklinkFleetIdentityProviderOutputReference IdentityProvider { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network"></a>

```csharp
public WorklinkFleetNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a>

---

##### `AuditStreamArnInput`<sup>Optional</sup> <a name="AuditStreamArnInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput"></a>

```csharp
public string AuditStreamArnInput { get; }
```

- *Type:* string

---

##### `DeviceCaCertificateInput`<sup>Optional</sup> <a name="DeviceCaCertificateInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput"></a>

```csharp
public string DeviceCaCertificateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdentityProviderInput`<sup>Optional</sup> <a name="IdentityProviderInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput"></a>

```csharp
public WorklinkFleetIdentityProvider IdentityProviderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput"></a>

```csharp
public WorklinkFleetNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `OptimizeForEndUserLocationInput`<sup>Optional</sup> <a name="OptimizeForEndUserLocationInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput"></a>

```csharp
public object OptimizeForEndUserLocationInput { get; }
```

- *Type:* object

---

##### `AuditStreamArn`<sup>Required</sup> <a name="AuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn"></a>

```csharp
public string AuditStreamArn { get; }
```

- *Type:* string

---

##### `DeviceCaCertificate`<sup>Required</sup> <a name="DeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate"></a>

```csharp
public string DeviceCaCertificate { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OptimizeForEndUserLocation`<sup>Required</sup> <a name="OptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation"></a>

```csharp
public object OptimizeForEndUserLocation { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkFleetConfig <a name="WorklinkFleetConfig" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkFleetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string AuditStreamArn = null,
    string DeviceCaCertificate = null,
    string DisplayName = null,
    string Id = null,
    WorklinkFleetIdentityProvider IdentityProvider = null,
    WorklinkFleetNetwork Network = null,
    object OptimizeForEndUserLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn">AuditStreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate">DeviceCaCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider">IdentityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | identity_provider block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation">OptimizeForEndUserLocation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}.

---

##### `AuditStreamArn`<sup>Optional</sup> <a name="AuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn"></a>

```csharp
public string AuditStreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}.

---

##### `DeviceCaCertificate`<sup>Optional</sup> <a name="DeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate"></a>

```csharp
public string DeviceCaCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProvider`<sup>Optional</sup> <a name="IdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider"></a>

```csharp
public WorklinkFleetIdentityProvider IdentityProvider { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

identity_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#identity_provider WorklinkFleet#identity_provider}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network"></a>

```csharp
public WorklinkFleetNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#network WorklinkFleet#network}

---

##### `OptimizeForEndUserLocation`<sup>Optional</sup> <a name="OptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation"></a>

```csharp
public object OptimizeForEndUserLocation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.

---

### WorklinkFleetIdentityProvider <a name="WorklinkFleetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkFleetIdentityProvider {
    string SamlMetadata,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata">SamlMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}. |

---

##### `SamlMetadata`<sup>Required</sup> <a name="SamlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata"></a>

```csharp
public string SamlMetadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}.

---

### WorklinkFleetNetwork <a name="WorklinkFleetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkFleetNetwork {
    string[] SecurityGroupIds,
    string[] SubnetIds,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorklinkFleetIdentityProviderOutputReference <a name="WorklinkFleetIdentityProviderOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkFleetIdentityProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput">SamlMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata">SamlMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamlMetadataInput`<sup>Optional</sup> <a name="SamlMetadataInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput"></a>

```csharp
public string SamlMetadataInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `SamlMetadata`<sup>Required</sup> <a name="SamlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata"></a>

```csharp
public string SamlMetadata { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue"></a>

```csharp
public WorklinkFleetIdentityProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---


### WorklinkFleetNetworkOutputReference <a name="WorklinkFleetNetworkOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkFleetNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue"></a>

```csharp
public WorklinkFleetNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---



