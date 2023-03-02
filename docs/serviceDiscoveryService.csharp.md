# `serviceDiscoveryService` Submodule <a name="`serviceDiscoveryService` Submodule" id="@cdktf/provider-aws.serviceDiscoveryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryService <a name="ServiceDiscoveryService" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service aws_service_discovery_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryService(Construct Scope, string Id, ServiceDiscoveryServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig">ServiceDiscoveryServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig">ServiceDiscoveryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig">PutDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig">PutHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDnsConfig">ResetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckConfig">ResetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckCustomConfig">ResetHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDnsConfig` <a name="PutDnsConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig"></a>

```csharp
private void PutDnsConfig(ServiceDiscoveryServiceDnsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig"></a>

```csharp
private void PutHealthCheckConfig(ServiceDiscoveryServiceHealthCheckConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---

##### `PutHealthCheckCustomConfig` <a name="PutHealthCheckCustomConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig"></a>

```csharp
private void PutHealthCheckCustomConfig(ServiceDiscoveryServiceHealthCheckCustomConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnsConfig` <a name="ResetDnsConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDnsConfig"></a>

```csharp
private void ResetDnsConfig()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetHealthCheckConfig` <a name="ResetHealthCheckConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckConfig"></a>

```csharp
private void ResetHealthCheckConfig()
```

##### `ResetHealthCheckCustomConfig` <a name="ResetHealthCheckCustomConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckCustomConfig"></a>

```csharp
private void ResetHealthCheckCustomConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServiceDiscoveryService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServiceDiscoveryService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServiceDiscoveryService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference">ServiceDiscoveryServiceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference">ServiceDiscoveryServiceHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfig">HealthCheckCustomConfig</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference">ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfigInput">DnsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfigInput">HealthCheckCustomConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfig"></a>

```csharp
public ServiceDiscoveryServiceDnsConfigOutputReference DnsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference">ServiceDiscoveryServiceDnsConfigOutputReference</a>

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfig"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckConfigOutputReference HealthCheckConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference">ServiceDiscoveryServiceHealthCheckConfigOutputReference</a>

---

##### `HealthCheckCustomConfig`<sup>Required</sup> <a name="HealthCheckCustomConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfig"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference HealthCheckCustomConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference">ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsConfigInput`<sup>Optional</sup> <a name="DnsConfigInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfigInput"></a>

```csharp
public ServiceDiscoveryServiceDnsConfig DnsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfigInput"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckConfig HealthCheckConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---

##### `HealthCheckCustomConfigInput`<sup>Optional</sup> <a name="HealthCheckCustomConfigInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfigInput"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckCustomConfig HealthCheckCustomConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryServiceConfig <a name="ServiceDiscoveryServiceConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    ServiceDiscoveryServiceDnsConfig DnsConfig = null,
    object ForceDestroy = null,
    ServiceDiscoveryServiceHealthCheckConfig HealthCheckConfig = null,
    ServiceDiscoveryServiceHealthCheckCustomConfig HealthCheckCustomConfig = null,
    string Id = null,
    string NamespaceId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#name ServiceDiscoveryService#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#description ServiceDiscoveryService#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | health_check_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckCustomConfig">HealthCheckCustomConfig</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | health_check_custom_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#id ServiceDiscoveryService#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags ServiceDiscoveryService#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#name ServiceDiscoveryService#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#description ServiceDiscoveryService#description}.

---

##### `DnsConfig`<sup>Optional</sup> <a name="DnsConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dnsConfig"></a>

```csharp
public ServiceDiscoveryServiceDnsConfig DnsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_config ServiceDiscoveryService#dns_config}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}.

---

##### `HealthCheckConfig`<sup>Optional</sup> <a name="HealthCheckConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckConfig"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckConfig HealthCheckConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

health_check_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_config ServiceDiscoveryService#health_check_config}

---

##### `HealthCheckCustomConfig`<sup>Optional</sup> <a name="HealthCheckCustomConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckCustomConfig"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckCustomConfig HealthCheckCustomConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

health_check_custom_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#id ServiceDiscoveryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags ServiceDiscoveryService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceDnsConfig <a name="ServiceDiscoveryServiceDnsConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceDnsConfig {
    object DnsRecords,
    string NamespaceId,
    string RoutingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.dnsRecords">DnsRecords</a></code> | <code>object</code> | dns_records block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.routingPolicy">RoutingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}. |

---

##### `DnsRecords`<sup>Required</sup> <a name="DnsRecords" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.dnsRecords"></a>

```csharp
public object DnsRecords { get; set; }
```

- *Type:* object

dns_records block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_records ServiceDiscoveryService#dns_records}

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

##### `RoutingPolicy`<sup>Optional</sup> <a name="RoutingPolicy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.routingPolicy"></a>

```csharp
public string RoutingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}.

---

### ServiceDiscoveryServiceDnsConfigDnsRecords <a name="ServiceDiscoveryServiceDnsConfigDnsRecords" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceDnsConfigDnsRecords {
    double Ttl,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#ttl ServiceDiscoveryService#ttl}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#ttl ServiceDiscoveryService#ttl}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceHealthCheckConfig <a name="ServiceDiscoveryServiceHealthCheckConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceHealthCheckConfig {
    double FailureThreshold = null,
    string ResourcePath = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.resourcePath">ResourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.resourcePath"></a>

```csharp
public string ResourcePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceHealthCheckCustomConfig <a name="ServiceDiscoveryServiceHealthCheckCustomConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceHealthCheckCustomConfig {
    double FailureThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDiscoveryServiceDnsConfigDnsRecordsList <a name="ServiceDiscoveryServiceDnsConfigDnsRecordsList" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceDnsConfigDnsRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get"></a>

```csharp
private ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference <a name="ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceDiscoveryServiceDnsConfigOutputReference <a name="ServiceDiscoveryServiceDnsConfigOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceDnsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords">PutDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resetRoutingPolicy">ResetRoutingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsRecords` <a name="PutDnsRecords" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords"></a>

```csharp
private void PutDnsRecords(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords.parameter.value"></a>

- *Type:* object

---

##### `ResetRoutingPolicy` <a name="ResetRoutingPolicy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resetRoutingPolicy"></a>

```csharp
private void ResetRoutingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords">DnsRecords</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList">ServiceDiscoveryServiceDnsConfigDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput">DnsRecordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicyInput">RoutingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy">RoutingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsRecords`<sup>Required</sup> <a name="DnsRecords" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords"></a>

```csharp
public ServiceDiscoveryServiceDnsConfigDnsRecordsList DnsRecords { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList">ServiceDiscoveryServiceDnsConfigDnsRecordsList</a>

---

##### `DnsRecordsInput`<sup>Optional</sup> <a name="DnsRecordsInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput"></a>

```csharp
public object DnsRecordsInput { get; }
```

- *Type:* object

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `RoutingPolicyInput`<sup>Optional</sup> <a name="RoutingPolicyInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicyInput"></a>

```csharp
public string RoutingPolicyInput { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `RoutingPolicy`<sup>Required</sup> <a name="RoutingPolicy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy"></a>

```csharp
public string RoutingPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceDiscoveryServiceDnsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---


### ServiceDiscoveryServiceHealthCheckConfigOutputReference <a name="ServiceDiscoveryServiceHealthCheckConfigOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceHealthCheckConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetResourcePath"></a>

```csharp
private void ResetResourcePath()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput">ResourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath">ResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```csharp
public string ResourcePathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath"></a>

```csharp
public string ResourcePath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---


### ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference <a name="ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceDiscoveryServiceHealthCheckCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---



