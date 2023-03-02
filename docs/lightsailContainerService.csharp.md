# `lightsailContainerService` Submodule <a name="`lightsailContainerService` Submodule" id="@cdktf/provider-aws.lightsailContainerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainerService <a name="LightsailContainerService" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service aws_lightsail_container_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerService(Construct Scope, string Id, LightsailContainerServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig">LightsailContainerServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig">LightsailContainerServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess">PutPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames">PutPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess">ResetPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames">ResetPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPrivateRegistryAccess` <a name="PutPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess"></a>

```csharp
private void PutPrivateRegistryAccess(LightsailContainerServicePrivateRegistryAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `PutPublicDomainNames` <a name="PutPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames"></a>

```csharp
private void PutPublicDomainNames(LightsailContainerServicePublicDomainNames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts"></a>

```csharp
private void PutTimeouts(LightsailContainerServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled"></a>

```csharp
private void ResetIsDisabled()
```

##### `ResetPrivateRegistryAccess` <a name="ResetPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess"></a>

```csharp
private void ResetPrivateRegistryAccess()
```

##### `ResetPublicDomainNames` <a name="ResetPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames"></a>

```csharp
private void ResetPublicDomainNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailContainerService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailContainerService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailContainerService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId">PowerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn">PrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName">PrivateDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames">PublicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput">IsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput">PowerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput">PrivateRegistryAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput">PublicDomainNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput">ScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled">IsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power">Power</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `PowerId`<sup>Required</sup> <a name="PowerId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId"></a>

```csharp
public string PowerId { get; }
```

- *Type:* string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn"></a>

```csharp
public string PrincipalArn { get; }
```

- *Type:* string

---

##### `PrivateDomainName`<sup>Required</sup> <a name="PrivateDomainName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName"></a>

```csharp
public string PrivateDomainName { get; }
```

- *Type:* string

---

##### `PrivateRegistryAccess`<sup>Required</sup> <a name="PrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccessOutputReference PrivateRegistryAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a>

---

##### `PublicDomainNames`<sup>Required</sup> <a name="PublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames"></a>

```csharp
public LightsailContainerServicePublicDomainNamesOutputReference PublicDomainNames { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts"></a>

```csharp
public LightsailContainerServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput"></a>

```csharp
public object IsDisabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PowerInput`<sup>Optional</sup> <a name="PowerInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput"></a>

```csharp
public string PowerInput { get; }
```

- *Type:* string

---

##### `PrivateRegistryAccessInput`<sup>Optional</sup> <a name="PrivateRegistryAccessInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccess PrivateRegistryAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `PublicDomainNamesInput`<sup>Optional</sup> <a name="PublicDomainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput"></a>

```csharp
public LightsailContainerServicePublicDomainNames PublicDomainNamesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput"></a>

```csharp
public double ScaleInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled"></a>

```csharp
public object IsDisabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power"></a>

```csharp
public string Power { get; }
```

- *Type:* string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerServiceConfig <a name="LightsailContainerServiceConfig" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServiceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Power,
    double Scale,
    string Id = null,
    object IsDisabled = null,
    LightsailContainerServicePrivateRegistryAccess PrivateRegistryAccess = null,
    LightsailContainerServicePublicDomainNames PublicDomainNames = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    LightsailContainerServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power">Power</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale">Scale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled">IsDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | private_registry_access block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames">PublicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | public_domain_names block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}.

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power"></a>

```csharp
public string Power { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}.

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale"></a>

```csharp
public double Scale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled"></a>

```csharp
public object IsDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}.

---

##### `PrivateRegistryAccess`<sup>Optional</sup> <a name="PrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccess PrivateRegistryAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

private_registry_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}

---

##### `PublicDomainNames`<sup>Optional</sup> <a name="PublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames"></a>

```csharp
public LightsailContainerServicePublicDomainNames PublicDomainNames { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

public_domain_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts"></a>

```csharp
public LightsailContainerServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#timeouts LightsailContainerService#timeouts}

---

### LightsailContainerServicePrivateRegistryAccess <a name="LightsailContainerServicePrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePrivateRegistryAccess {
    LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole EcrImagePullerRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | ecr_image_puller_role block. |

---

##### `EcrImagePullerRole`<sup>Optional</sup> <a name="EcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole EcrImagePullerRole { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

ecr_image_puller_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}

---

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole {
    object IsActive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive">IsActive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}. |

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}.

---

### LightsailContainerServicePublicDomainNames <a name="LightsailContainerServicePublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePublicDomainNames {
    object Certificate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate">Certificate</a></code> | <code>object</code> | certificate block. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate LightsailContainerService#certificate}

---

### LightsailContainerServicePublicDomainNamesCertificate <a name="LightsailContainerServicePublicDomainNamesCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePublicDomainNamesCertificate {
    string CertificateName,
    string[] DomainNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames">DomainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}. |

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}.

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames"></a>

```csharp
public string[] DomainNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}.

---

### LightsailContainerServiceTimeouts <a name="LightsailContainerServiceTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">ResetIsActive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```csharp
private void ResetIsActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">PrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```csharp
public string PrincipalArn { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---


### LightsailContainerServicePrivateRegistryAccessOutputReference <a name="LightsailContainerServicePrivateRegistryAccessOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePrivateRegistryAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole">PutEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole">ResetEcrImagePullerRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEcrImagePullerRole` <a name="PutEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```csharp
private void PutEcrImagePullerRole(LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `ResetEcrImagePullerRole` <a name="ResetEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```csharp
private void ResetEcrImagePullerRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">EcrImagePullerRoleInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EcrImagePullerRole`<sup>Required</sup> <a name="EcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference EcrImagePullerRole { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `EcrImagePullerRoleInput`<sup>Optional</sup> <a name="EcrImagePullerRoleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole EcrImagePullerRoleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue"></a>

```csharp
public LightsailContainerServicePrivateRegistryAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---


### LightsailContainerServicePublicDomainNamesCertificateList <a name="LightsailContainerServicePublicDomainNamesCertificateList" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePublicDomainNamesCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get"></a>

```csharp
private LightsailContainerServicePublicDomainNamesCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LightsailContainerServicePublicDomainNamesCertificateOutputReference <a name="LightsailContainerServicePublicDomainNamesCertificateOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePublicDomainNamesCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput">DomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput"></a>

```csharp
public string[] DomainNamesInput { get; }
```

- *Type:* string[]

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LightsailContainerServicePublicDomainNamesOutputReference <a name="LightsailContainerServicePublicDomainNamesOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServicePublicDomainNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate"></a>

```csharp
private void PutCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate"></a>

```csharp
public LightsailContainerServicePublicDomainNamesCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue"></a>

```csharp
public LightsailContainerServicePublicDomainNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---


### LightsailContainerServiceTimeoutsOutputReference <a name="LightsailContainerServiceTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailContainerServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



